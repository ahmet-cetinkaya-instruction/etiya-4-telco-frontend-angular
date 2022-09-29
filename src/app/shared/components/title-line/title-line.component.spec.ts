import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLineComponent } from './title-line.component';

describe('TitleLineComponent', () => {
  let component: TitleLineComponent;
  let fixture: ComponentFixture<TitleLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleLineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
