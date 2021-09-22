import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeStatDetailsComponent } from './orange-stat-details.component';

describe('OrangeStatDetailsComponent', () => {
  let component: OrangeStatDetailsComponent;
  let fixture: ComponentFixture<OrangeStatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeStatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeStatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
