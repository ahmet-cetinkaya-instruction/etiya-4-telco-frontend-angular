import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactMediumComponent } from './customer-contact-medium.component';

describe('CustomerContactMediumComponent', () => {
  let component: CustomerContactMediumComponent;
  let fixture: ComponentFixture<CustomerContactMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerContactMediumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerContactMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
