import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CathegoryService } from 'src/app/services/cathegory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-cathegory',
  templateUrl: './add-cathegory.component.html',
  styleUrls: ['./add-cathegory.component.css']
})
export class AddCathegoryComponent implements OnInit {


  cathegory = {
    title : '',
    description : ''
  }

  constructor(private cathegoryService:CathegoryService,private snack:MatSnackBar,private router:Router) { }
  ngOnInit(): void {   
   
  }
  
  formSubmit(){
    if(this.cathegory.title.trim() == '' || this.cathegory.title == null){
      this.snack.open("The title is required!!",'',{
        duration:3000
      })
      return ;
    }

    this.cathegoryService.addCathegory(this.cathegory).subscribe((data:any)=>{

      this.cathegory.title = '';
      this.cathegory.description = '';
      Swal.fire('Category added','The category has been added','success');
      this.router.navigate(['/admin/cathegories']);

    },(error)=>{

      Swal.fire('Error !!','Error saving the Category','error')
    });

  }

}
