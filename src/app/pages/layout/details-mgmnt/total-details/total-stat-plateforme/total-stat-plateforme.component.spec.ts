import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatPlateformeComponent } from './total-stat-plateforme.component';

describe('TotalStatPlateformeComponent', () => {
  let component: TotalStatPlateformeComponent;
  let fixture: ComponentFixture<TotalStatPlateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalStatPlateformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStatPlateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
