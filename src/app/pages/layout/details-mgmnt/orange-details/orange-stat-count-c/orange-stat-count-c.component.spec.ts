import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeStatCountCComponent } from './orange-stat-count-c.component';

describe('OrangeStatCountCComponent', () => {
  let component: OrangeStatCountCComponent;
  let fixture: ComponentFixture<OrangeStatCountCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeStatCountCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeStatCountCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
