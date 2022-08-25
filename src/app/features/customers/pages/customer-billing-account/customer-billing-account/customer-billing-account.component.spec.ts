import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillingAccountComponent } from './customer-billing-account.component';

describe('CustomerBillingAccountComponent', () => {
  let component: CustomerBillingAccountComponent;
  let fixture: ComponentFixture<CustomerBillingAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBillingAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBillingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
