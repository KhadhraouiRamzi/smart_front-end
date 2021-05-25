import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFtpComponent } from './detail-ftp.component';

describe('DetailFtpComponent', () => {
  let component: DetailFtpComponent;
  let fixture: ComponentFixture<DetailFtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
