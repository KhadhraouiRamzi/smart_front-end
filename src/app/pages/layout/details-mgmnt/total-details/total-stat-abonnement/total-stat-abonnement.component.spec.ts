import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatAbonnementComponent } from './total-stat-abonnement.component';

describe('TotalStatAbonnementComponent', () => {
  let component: TotalStatAbonnementComponent;
  let fixture: ComponentFixture<TotalStatAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalStatAbonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStatAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
