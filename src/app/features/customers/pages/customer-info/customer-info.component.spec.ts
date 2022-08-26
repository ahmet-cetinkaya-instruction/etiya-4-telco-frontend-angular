import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoComponent } from './customer-info.component';

describe('CustomerInfoComponent', () => {
  let component: CustomerInfoComponent;
  let fixture: ComponentFixture<CustomerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
