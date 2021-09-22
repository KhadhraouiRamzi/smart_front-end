import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFtpComponent } from './form-ftp.component';

describe('FormFtpComponent', () => {
  let component: FormFtpComponent;
  let fixture: ComponentFixture<FormFtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
