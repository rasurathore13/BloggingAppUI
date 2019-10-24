import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() blogObject: any;

  constructor(private router: Router) {
   }

  ngOnInit() {
  }

  redirectToFullBlog() {
    const wrongUrl = "wrongUrl";
    let newUrl = "/".concat(wrongUrl);
    debugger;
    this.router.navigate([newUrl]);
  }

}
