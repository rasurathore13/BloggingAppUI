import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { ActivatedRoute } from '@angular/router';
import { ɵNullViewportScroller } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogDetailsObject: any = {
    "blogHeading": null,
    "blogMainImageUrl": null,
    "blogDateTimeStamp": null,
    "blogBody": null,
    "blogAuthor": null,
  };
  blogColor = 'green';
  constructor(private _blogService: BlogService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._blogService.getBlogDetails(this._activatedRoute.snapshot.params['blogId']).subscribe(response => {
        this.blogDetailsObject = response;
        window.scrollTo(0,0);
      });
  }

  getMainImageUrl() {
    return "url('"+ this.blogDetailsObject['blogMainImageUrl'] +"')";
  }

}
