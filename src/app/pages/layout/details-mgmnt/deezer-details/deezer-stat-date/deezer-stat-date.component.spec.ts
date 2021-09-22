import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerStatDateComponent } from './deezer-stat-date.component';

describe('DeezerStatDateComponent', () => {
  let component: DeezerStatDateComponent;
  let fixture: ComponentFixture<DeezerStatDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerStatDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerStatDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
