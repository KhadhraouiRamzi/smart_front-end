import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFtpComponent } from './list-ftp.component';

describe('ListFtpComponent', () => {
  let component: ListFtpComponent;
  let fixture: ComponentFixture<ListFtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
