import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOrderComponent } from './submit-order.component';

describe('SubmitOrderComponent', () => {
  let component: SubmitOrderComponent;
  let fixture: ComponentFixture<SubmitOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
