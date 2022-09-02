import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerAddressComponent } from './add-customer-address.component';

describe('AddCustomerAddressComponent', () => {
  let component: AddCustomerAddressComponent;
  let fixture: ComponentFixture<AddCustomerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCustomerAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
