import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuHistoriqueComponent } from './revenu-historique.component';

describe('RevenuHistoriqueComponent', () => {
  let component: RevenuHistoriqueComponent;
  let fixture: ComponentFixture<RevenuHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
