import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  formSubmit() {
    this.userService.registerUser(this.user).subscribe((data) => {

      Swal.fire('User Registered successfully','','success');

    },(error)=>{

      Swal.fire('Something bad happened','','error');

    });
  }
}
