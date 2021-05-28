import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeStatPlateformeComponent } from './orange-stat-plateforme.component';

describe('OrangeStatPlateformeComponent', () => {
  let component: OrangeStatPlateformeComponent;
  let fixture: ComponentFixture<OrangeStatPlateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeStatPlateformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeStatPlateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
