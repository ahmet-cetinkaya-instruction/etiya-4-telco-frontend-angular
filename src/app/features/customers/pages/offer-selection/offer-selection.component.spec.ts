import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSelectionComponent } from './offer-selection.component';

describe('OfferSelectionComponent', () => {
  let component: OfferSelectionComponent;
  let fixture: ComponentFixture<OfferSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
