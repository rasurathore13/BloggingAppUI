import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    
    public env = environment;

    constructor(private _http: HttpClient) {
    }

    login(loginCredentials: any) {
        let url = this.env.BlogginAppAuthenticationAPIUrl;
        url = url.concat('JWT/Authenticate');
        return this._http.post(url, loginCredentials);
    }

}