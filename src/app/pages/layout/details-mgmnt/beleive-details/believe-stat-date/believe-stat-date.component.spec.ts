import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelieveStatDateComponent } from './believe-stat-date.component';

describe('BelieveStatDateComponent', () => {
  let component: BelieveStatDateComponent;
  let fixture: ComponentFixture<BelieveStatDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelieveStatDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelieveStatDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
