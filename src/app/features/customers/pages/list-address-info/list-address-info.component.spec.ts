import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddressInfoComponent } from './list-address-info.component';

describe('ListAddressInfoComponent', () => {
  let component: ListAddressInfoComponent;
  let fixture: ComponentFixture<ListAddressInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAddressInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListAddressInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
