import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AddBlogService } from './add-blog.service';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'

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
  showModal = false;
  dataSaved = false;

  uploadMainImage = false;

  uploadProgressPercentage: Observable<number>;
  uploadedImageUrl: Observable<string> = null;
  uploadedImageSnapShot: Observable<any>;
  angularFireReference: AngularFireStorageReference;
  angularFireTask: AngularFireUploadTask;


  constructor(private _addBlogService: AddBlogService,
              private _router: Router,
              private _afstorage: AngularFireStorage) { }

  ngOnInit() {
    if(sessionStorage.getItem('auth_token') === null) {
      this._router.navigate(['/dashboard']);
    } 
  }

  uploadMainImageFunc() {
    this.uploadMainImage = true;
    this.showModal = true;
  }

  getEditorReference(editorRef: any) {
    this.editorReference = editorRef;
    const toolbar = this.editorReference.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler.bind(this));
  }

  imageHandler() {
    this.showModal = true;
  }

  closeImageUploadModal() {
    this.uploadMainImage = false;
    this.showModal = false;
  }

  uploadImage(event: any) {
    if(event !== null) {
      const path = event.target.files[0].name;
      this.angularFireReference = this._afstorage.ref(path);
      this.angularFireTask = this.angularFireReference.put(event.target.files[0]);
      this.uploadProgressPercentage = this.angularFireTask.percentageChanges();
      this.angularFireTask.snapshotChanges().pipe(finalize(() => {
        this.angularFireReference.getDownloadURL().subscribe(url => {
          
          if (!this.uploadMainImage) {
            this.uploadedImageUrl = url;
            const range = this.editorReference.getSelection();
            const img = "<img src='"+this.uploadedImageUrl+"' width='100%'>";
            this.editorReference.clipboard.dangerouslyPasteHTML(range.index, img);
          } else {
            this.blogMainImageUrl = url;
          }
          
          this.uploadedImageUrl = null;
          this.uploadProgressPercentage = null;
          this.closeImageUploadModal();
        });
      })).subscribe();

    }
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
      const navigateUrl = 'dashboard';
      this.dataSaved = true;
      this._router.navigate([navigateUrl]);
    },
      err => {
        window.alert("There was an error in uploading the details");
      });
  }

}
