import { Injectable, Inject } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AddBlogService {

    public env = environment;

    constructor(private _http: HttpClient) { }

    addBlog(blogInfo: any) {
        let url = this.env.BlogAPIUrl;
        url = url.concat('Blog/AddBlog');
        return this._http.post(url, blogInfo);
    }

}