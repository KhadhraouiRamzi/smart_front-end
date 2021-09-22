import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerStatAbonnementComponent } from './deezer-stat-abonnement.component';

describe('DeezerStatAbonnementComponent', () => {
  let component: DeezerStatAbonnementComponent;
  let fixture: ComponentFixture<DeezerStatAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerStatAbonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerStatAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
