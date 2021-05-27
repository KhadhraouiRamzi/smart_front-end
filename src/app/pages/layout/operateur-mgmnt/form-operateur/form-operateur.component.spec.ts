import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperateurComponent } from './form-operateur.component';

describe('FormOperateurComponent', () => {
  let component: FormOperateurComponent;
  let fixture: ComponentFixture<FormOperateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOperateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
