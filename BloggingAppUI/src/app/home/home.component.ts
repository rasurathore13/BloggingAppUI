import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let requestHeaders: HttpHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.append('Authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImFQY3R3X29kdlJPb0VOZzNWb09sSWgydGlFcyIsImtpZCI6ImFQY3R3X29kdlJPb0VOZzNWb09sSWgydGlFcyJ9.eyJhdWQiOiJhOTIyNDhjZi1kOGEwLTRlOTktYTE1My1hODczZDI0ZmU2NTIiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MGE4ZWIzZi00NmU3LTRiMGYtYWMxMC05Y2I5ZjI1NmQ0ZjYvIiwiaWF0IjoxNTY5ODQ0MzU2LCJuYmYiOjE1Njk4NDQzNTYsImV4cCI6MTU2OTg0ODI1NiwiYWlvIjoiQVNRQTIvOE1BQUFBdk9LWTM3eWNuaWsxK1pIM3VpTFVEYytqZXBXNGkyb25Ud3F2R2p3dXdQaz0iLCJhbXIiOlsicHdkIl0sImZhbWlseV9uYW1lIjoiUUFUIiwiZ2l2ZW5fbmFtZSI6IlZhbHVlbGFicyIsImlwYWRkciI6IjIwMi44OS4xMDcuMjA0IiwibmFtZSI6IlFBVCwgVmFsdWVsYWJzIiwibm9uY2UiOiI5Njk3NjIxYTdlZGM0NWYzYmVhNmE2ZThjNjU1MDE1Yl8yMDE5MDkzMDEyMDIzNSIsIm9pZCI6IjEyYTU3NzQ5LTZmNjQtNGIxNy1iZjJiLWZmYjUwOWRjMzAwNSIsInN1YiI6ImxhQ2hSYm5acTZHelU2RlJuUENSYWhVOFphcmFyWXFjY0ZQYnpNeHZQeEkiLCJ0aWQiOiI1MGE4ZWIzZi00NmU3LTRiMGYtYWMxMC05Y2I5ZjI1NmQ0ZjYiLCJ1bmlxdWVfbmFtZSI6InZhbHVlbGFiczJAcmxyYXV0aC5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJ2YWx1ZWxhYnMyQHJscmF1dGgub25taWNyb3NvZnQuY29tIiwidXRpIjoiRmtaaGpPWUpfRUMwV0NINmt4MWJBQSIsInZlciI6IjEuMCJ9.iFkR_ErvnyPW8u_0LpBByMLQKaaqxy5om3AVH18q7hjoxiwOX3Gv2mtGXLbjhP0u9WblA2anxHuioksGW1ENkb-G3b_Z_J6Cvpw77T-qhULWjb14iJrtKUiv_XlmKjvADXG80XqJ41Mo493mvYMGzEObY--902pZRIU1UnpIECoOJVa7ngFs31s996C5FtS8PNBGD8MpQAfDyUBKU9S6eduJ9rjB1EOdjXlu5k_YdqHcFUPs2yeUzvxfVLy5oAtelfKkFlu1cllyxszG8ZVfuaXVZxoXvN3XuIyNJcM9PDZ_Zf6Vdjn2uFYxIg0m9_huyrMsqZPdzulJ01BCuRKfzg');
    requestHeaders = requestHeaders.append('tenant', 'rlrauth');
    const url = "https://blueiq3-dev-customerregistration-api.azurewebsites.net/api/Customer/GetTenantDetails"
    this.http.get(url, {
      headers: requestHeaders,
    }).subscribe(Response => {console.log(Response)});
  }

}
