import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  formSubmit(){}
}
