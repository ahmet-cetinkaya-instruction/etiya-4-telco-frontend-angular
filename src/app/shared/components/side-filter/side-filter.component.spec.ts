import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFilterComponent } from './side-filter.component';

describe('SideFilterComponent', () => {
  let component: SideFilterComponent;
  let fixture: ComponentFixture<SideFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
