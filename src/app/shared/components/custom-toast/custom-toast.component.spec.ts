import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToastComponent } from './custom-toast.component';

describe('CustomToastComponent', () => {
  let component: CustomToastComponent;
  let fixture: ComponentFixture<CustomToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
