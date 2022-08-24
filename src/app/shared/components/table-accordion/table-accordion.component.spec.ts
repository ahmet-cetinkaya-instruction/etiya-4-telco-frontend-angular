import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAccordionComponent } from './table-accordion.component';

describe('TableAccordionComponent', () => {
  let component: TableAccordionComponent;
  let fixture: ComponentFixture<TableAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
