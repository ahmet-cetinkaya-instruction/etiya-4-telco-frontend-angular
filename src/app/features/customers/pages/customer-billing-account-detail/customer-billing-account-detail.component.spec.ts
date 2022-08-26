import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillingAccountDetailComponent } from './customer-billing-account-detail.component';

describe('CustomerBillingAccountDetailComponent', () => {
  let component: CustomerBillingAccountDetailComponent;
  let fixture: ComponentFixture<CustomerBillingAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBillingAccountDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBillingAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
