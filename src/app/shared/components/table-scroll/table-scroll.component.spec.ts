import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableScrollComponent } from './table-scroll.component';

describe('TableScrollComponent', () => {
  let component: TableScrollComponent;
  let fixture: ComponentFixture<TableScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
