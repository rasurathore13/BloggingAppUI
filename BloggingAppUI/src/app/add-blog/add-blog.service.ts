import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AddBlogService {

    public env = environment;

    constructor(private _http: HttpClient) { }

    createAuthorization() {
        let headers = new HttpHeaders();
        headers.append('Authorization', 'bearer '+localStorage.getItem('auth_token'));
        headers.append('Content-Type','application/json')
        return headers;
    }

    addBlog(blogInfo: any) {
        let url = this.env.BlogAPIUrl;
        url = url.concat('Blog/AddBlog');
        const headers = this.createAuthorization();
        return this._http.post(url, blogInfo, {headers});
    }

}