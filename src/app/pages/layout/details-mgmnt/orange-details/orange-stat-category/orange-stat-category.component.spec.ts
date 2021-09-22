import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeStatCategoryComponent } from './orange-stat-category.component';

describe('OrangeStatCategoryComponent', () => {
  let component: OrangeStatCategoryComponent;
  let fixture: ComponentFixture<OrangeStatCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeStatCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeStatCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
