import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { NgxPaginationModule } from 'ngx-pagination';
import  { QuillModule } from 'ngx-quill';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoaderComponent } from './customer-loader/customer-loader.component';


import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BigCardComponent } from './cards/big-card/big-card.component';
import { MediumCardComponent } from './cards/medium-card/medium-card.component';
import { SmallCardComponent } from './cards/small-card/small-card.component';
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerLoaderComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    BigCardComponent,
    MediumCardComponent,
    SmallCardComponent,
    BlogComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    QuillModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomerLoaderComponent]
})
export class AppModule { }
