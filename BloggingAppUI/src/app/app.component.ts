import { Component } from '@angular/core';
import { CustomerLoaderComponent } from '../app/customer-loader/customer-loader.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BloggingAppUI';
  customLoader = CustomerLoaderComponent;
}
