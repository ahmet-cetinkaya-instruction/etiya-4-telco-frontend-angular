import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayTitleComponent } from './overlay-title.component';

describe('OverlayTitleComponent', () => {
  let component: OverlayTitleComponent;
  let fixture: ComponentFixture<OverlayTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
