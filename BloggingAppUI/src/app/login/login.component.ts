import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bloggerEmail : string;
  bloggerPassword: string;

  constructor(private _router: Router,
              private _loginService: LoginService) {
    if(sessionStorage.getItem('auth_token') !== null) {
      this._router.navigate(['/dashboard']);
    }
   }

  ngOnInit() {
  }

  login() {
      const loginCredentials = {
        BloggerEmail: this.bloggerEmail,
        BloggerPassword: this.bloggerPassword
      };
      this._loginService.login(loginCredentials).subscribe(response => {
        sessionStorage.setItem('auth_token', response['token']);
        window.location.reload();
      },
      (error) => {
        window.alert("There was an error logging you in. Please check your credentials");
      });
    }

}
