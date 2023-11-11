import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public user = {    
    name: '',
    surname: '',
    email: '', 
    role: '',    
    enabled: '',
    
  };


  ngOnInit(): void {   
  }

  


  formSubmit(){}

}
