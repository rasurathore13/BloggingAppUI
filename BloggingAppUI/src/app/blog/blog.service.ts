import { HttpClient } from '@angular/common/http';
import  { Injectable } from '@angular/core';
import  { environment } from '../../environments/environment';

@Injectable({
    providedIn:'root'
})
export class BlogService{

    public env: any;

    constructor(private _http: HttpClient) {
        this.env = environment;
    }

    public getBlogDetails(blogId: number) {
        let url = this.env.BlogAPIUrl;
        url = url.concat('Blog/GetBlogDetails?blogId=');
        url = url.concat(blogId);
        return this._http.get(url);
    }

}