import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  blogList: any;

  constructor(private _dashboradService: DashboardService) { }

  ngOnInit() {
    this._dashboradService.getAllBlogs().subscribe(response => {
      this.blogList = response;
    })
  }

}
