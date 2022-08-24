import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactMediumComponent } from './add-contact-medium.component';

describe('AddContactMediumComponent', () => {
  let component: AddContactMediumComponent;
  let fixture: ComponentFixture<AddContactMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactMediumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
