import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationProductComponent } from './configuration-product.component';

describe('ConfigurationProductComponent', () => {
  let component: ConfigurationProductComponent;
  let fixture: ComponentFixture<ConfigurationProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigurationProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurationProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
