import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isNewUser = true;

  constructor(private http: HttpClient, private router: Router) { 
    if(localStorage.getItem('auth_token') !== null) {
      this.isNewUser = false;
    }
  }

  ngOnInit() {
    
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  register() {
    this.router.navigate(['/register']);
  }

}
