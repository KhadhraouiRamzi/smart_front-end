import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlateformeComponent } from './form-plateforme.component';

describe('FormPlateformeComponent', () => {
  let component: FormPlateformeComponent;
  let fixture: ComponentFixture<FormPlateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPlateformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
