import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelieveStatAbonnementComponent } from './believe-stat-abonnement.component';

describe('BelieveStatAbonnementComponent', () => {
  let component: BelieveStatAbonnementComponent;
  let fixture: ComponentFixture<BelieveStatAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelieveStatAbonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelieveStatAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
