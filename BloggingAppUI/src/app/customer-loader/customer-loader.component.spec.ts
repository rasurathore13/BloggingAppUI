import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoaderComponent } from './customer-loader.component';

describe('CustomerLoaderComponent', () => {
  let component: CustomerLoaderComponent;
  let fixture: ComponentFixture<CustomerLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
