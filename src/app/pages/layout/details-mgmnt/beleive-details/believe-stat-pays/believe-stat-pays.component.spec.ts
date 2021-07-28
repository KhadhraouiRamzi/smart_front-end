import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelieveStatPaysComponent } from './believe-stat-pays.component';

describe('BelieveStatPaysComponent', () => {
  let component: BelieveStatPaysComponent;
  let fixture: ComponentFixture<BelieveStatPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelieveStatPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelieveStatPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
