import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAccordionHeaderComponent } from './table-accordion-header.component';

describe('TableAccordionHeaderComponent', () => {
  let component: TableAccordionHeaderComponent;
  let fixture: ComponentFixture<TableAccordionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAccordionHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableAccordionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
