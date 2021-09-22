import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatCategoryComponent } from './total-stat-category.component';

describe('TotalStatCategoryComponent', () => {
  let component: TotalStatCategoryComponent;
  let fixture: ComponentFixture<TotalStatCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalStatCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStatCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
