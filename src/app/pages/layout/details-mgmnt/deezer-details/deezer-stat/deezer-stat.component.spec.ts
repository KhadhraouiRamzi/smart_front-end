import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerStatComponent } from './deezer-stat.component';

describe('DeezerStatComponent', () => {
  let component: DeezerStatComponent;
  let fixture: ComponentFixture<DeezerStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
