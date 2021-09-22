import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeStatChansonComponent } from './orange-stat-chanson.component';

describe('OrangeStatChansonComponent', () => {
  let component: OrangeStatChansonComponent;
  let fixture: ComponentFixture<OrangeStatChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeStatChansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeStatChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
