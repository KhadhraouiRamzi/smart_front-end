import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatPaysComponent } from './total-stat-pays.component';

describe('TotalStatPaysComponent', () => {
  let component: TotalStatPaysComponent;
  let fixture: ComponentFixture<TotalStatPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalStatPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStatPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
