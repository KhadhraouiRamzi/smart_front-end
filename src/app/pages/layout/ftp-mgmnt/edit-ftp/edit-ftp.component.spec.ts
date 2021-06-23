import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFtpComponent } from './edit-ftp.component';

describe('EditFtpComponent', () => {
  let component: EditFtpComponent;
  let fixture: ComponentFixture<EditFtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
