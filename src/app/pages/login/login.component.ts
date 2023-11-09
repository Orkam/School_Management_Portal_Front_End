import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginData = {
    username: '',
    password: '',
  };

  constructor(
    private snack: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {}

  formSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username.trim() == null
    ) {
      this.snack.open('Username is required!!', 'Acept', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password.trim() == null
    ) {
      this.snack.open('Password is requiered !!', 'Acept', {
        duration: 3000,
      });
      return;
    }

    this.loginService.loginProcess(this.loginData).subscribe(
      (response: any) => {
        this.loginService.loginUser(response.token);

        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);

          if (this.loginService.getUserRole() == 'Normal') {
            this.router.navigate(['user-dashboard']);
            this.loginService.loginStatusSubjec.next(true);
          } else if ((this, this.loginService.getUserRole() == 'Admin')) {
            this.router.navigate(['admin']);
            this.loginService.loginStatusSubjec.next(true);
          }else{

            this.loginService.logout();
          }
        });
      },
      (error: any) => {
        console.log(error);
        this.snack.open('Invalid Credentials , Try again !!', 'Acept', {
          duration: 3000,
        });
      }
    );
  }
}
