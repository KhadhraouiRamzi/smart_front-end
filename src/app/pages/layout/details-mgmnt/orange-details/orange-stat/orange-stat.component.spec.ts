import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeStatComponent } from './orange-stat.component';

describe('OrangeStatComponent', () => {
  let component: OrangeStatComponent;
  let fixture: ComponentFixture<OrangeStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
