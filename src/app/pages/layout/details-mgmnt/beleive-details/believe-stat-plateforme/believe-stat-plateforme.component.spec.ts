import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelieveStatPlateformeComponent } from './believe-stat-plateforme.component';

describe('BelieveStatPlateformeComponent', () => {
  let component: BelieveStatPlateformeComponent;
  let fixture: ComponentFixture<BelieveStatPlateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelieveStatPlateformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelieveStatPlateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
