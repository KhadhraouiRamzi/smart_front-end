import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatChansonComponent } from './total-stat-chanson.component';

describe('TotalStatChansonComponent', () => {
  let component: TotalStatChansonComponent;
  let fixture: ComponentFixture<TotalStatChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalStatChansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStatChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
