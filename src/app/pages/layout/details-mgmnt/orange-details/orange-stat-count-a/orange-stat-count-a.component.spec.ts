import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeStatCountAComponent } from './orange-stat-count-a.component';

describe('OrangeStatCountAComponent', () => {
  let component: OrangeStatCountAComponent;
  let fixture: ComponentFixture<OrangeStatCountAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeStatCountAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeStatCountAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
