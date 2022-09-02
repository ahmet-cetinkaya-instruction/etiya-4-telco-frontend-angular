import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustContactMediumComponent } from './update-cust-contact-medium.component';

describe('UpdateCustContactMediumComponent', () => {
  let component: UpdateCustContactMediumComponent;
  let fixture: ComponentFixture<UpdateCustContactMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCustContactMediumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCustContactMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
