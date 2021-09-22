import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerStatPaysComponent } from './deezer-stat-pays.component';

describe('DeezerStatPaysComponent', () => {
  let component: DeezerStatPaysComponent;
  let fixture: ComponentFixture<DeezerStatPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerStatPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerStatPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
