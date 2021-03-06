import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onLogin(loginForm: NgForm) {
     console.log(loginForm.value);
     const token = this.authService.authUser(loginForm.value);
     if(token) {
       localStorage.setItem('token', token.userName);
       this.alertify.success('Login Successful');
       this.router.navigate(['/']);
     }else {
       this.alertify.error('User id or password is wrong');
     }
  }

}
