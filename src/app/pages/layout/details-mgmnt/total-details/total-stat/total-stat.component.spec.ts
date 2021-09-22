import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatComponent } from './total-stat.component';

describe('TotalStatComponent', () => {
  let component: TotalStatComponent;
  let fixture: ComponentFixture<TotalStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
