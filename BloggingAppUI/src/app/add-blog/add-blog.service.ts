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
        let requestHeaders : HttpHeaders = new HttpHeaders();
        requestHeaders = requestHeaders.append('Authorization', 'Bearer '+sessionStorage.getItem('auth_token'));
        requestHeaders = requestHeaders.append('Content-Type','application/json');
        return requestHeaders;
    }

    addBlog(blogInfo: any) {
        let url = this.env.BlogAPIUrl;
        url = url.concat('Blog/AddBlog');
        const requestHeaders = this.createAuthorization();
        return this._http.post(url, blogInfo, { headers: requestHeaders});
    }

}