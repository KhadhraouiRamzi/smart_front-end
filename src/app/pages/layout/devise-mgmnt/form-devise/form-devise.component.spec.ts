import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeviseComponent } from './form-devise.component';

describe('FormDeviseComponent', () => {
  let component: FormDeviseComponent;
  let fixture: ComponentFixture<FormDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDeviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
