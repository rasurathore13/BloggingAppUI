import { Component, OnInit, ViewChild } from '@angular/core';
import { AddBlogService } from './add-blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blogHeading: string;
  blogBody: string;
  blogBrief: string;
  blogAuthor: string;
  blogMainImageUrl: string;
  editorReference: any;

  constructor(private _addBlogService: AddBlogService,
    private _router: Router) { }

  ngOnInit() {
  }

  getEditorReference(editorReference: any) {
    this.editorReference = editorReference;

    console.log(this.editorReference);
    const toolbar = this.editorReference.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler);
  }

  imageHandler() {
    const range = this.editorReference.getSelection();
    const img = '<a href="https://image.flaticon.com/icons/png/128/126/126477.png" data-lightbox="image-1" data-title="My caption"> <div> <img src="https://image.flaticon.com/icons/png/128/126/126477.png" height="50"/> </div> </a>';
    this.editorReference.clipboard.dangerouslyPasteHTML(range.index, img);
  }

  onSubmit() {
    const blogInfo = {
      'BlogMainImageUrl': this.blogMainImageUrl,
      'BlogHeading': this.blogHeading,
      'BlogBrief': this.blogBrief,
      'BlogAuthor': this.blogAuthor,
      'BlogBody': this.blogBody
    }
    this._addBlogService.addBlog(blogInfo).subscribe(response => {
      window.alert("The blog was added successfully");
      const navigateUrl = '/Blog/' + response['blogId'];
      this._router.navigate([navigateUrl]);
    },
      err => {
        window.alert("There was an error in uploading the details");
      });
  }

}
