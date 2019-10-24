import  { Injectable } from '@angular/core';
import  { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    public env = environment;
    
    constructor(private _http: HttpClient) {}

    public getAllBlogs(){
        let url = this.env['BlogAPIUrl'];
        url = url.concat('Blog/GetAllBlogs');
        return this._http.get(url);
    }
}