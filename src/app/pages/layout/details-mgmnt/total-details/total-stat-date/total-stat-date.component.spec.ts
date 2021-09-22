import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatDateComponent } from './total-stat-date.component';

describe('TotalStatDateComponent', () => {
  let component: TotalStatDateComponent;
  let fixture: ComponentFixture<TotalStatDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalStatDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStatDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
