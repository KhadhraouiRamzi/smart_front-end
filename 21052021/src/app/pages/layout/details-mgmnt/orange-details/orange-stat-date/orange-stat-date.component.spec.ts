import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeStatDateComponent } from './orange-stat-date.component';

describe('OrangeStatDateComponent', () => {
  let component: OrangeStatDateComponent;
  let fixture: ComponentFixture<OrangeStatDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeStatDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeStatDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
