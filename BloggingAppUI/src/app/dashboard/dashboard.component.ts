import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  blogList: any;
  pageNumber: number;

  constructor(private _dashboradService: DashboardService, private router: Router) { }

  ngOnInit() {
    this._dashboradService.getAllBlogs().subscribe(response => {
      this.blogList = response;
      if(localStorage.getItem('pageNumber') !== null) {
        this.pageNumber = parseInt(localStorage.getItem('pageNumber'));
      } else {
        this.pageNumber = 1;
        localStorage.setItem('pageNumber', new Number(1).toString());
      }
    })
  }

  pageChangeEvent(event: number) {
    localStorage.setItem('pageNumber', event.toString());
    this.pageNumber = event;
  }

  openBlog(blogId) {
    this.router.navigate(['/blog/'.concat(blogId)]);
  }

}
