import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerStatChansonComponent } from './deezer-stat-chanson.component';

describe('DeezerStatChansonComponent', () => {
  let component: DeezerStatChansonComponent;
  let fixture: ComponentFixture<DeezerStatChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerStatChansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerStatChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
