import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressInfoComponent } from './add-address-info.component';

describe('AddAddressInfoComponent', () => {
  let component: AddAddressInfoComponent;
  let fixture: ComponentFixture<AddAddressInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAddressInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAddressInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
