import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelieveStatChansonComponent } from './believe-stat-chanson.component';

describe('BelieveStatChansonComponent', () => {
  let component: BelieveStatChansonComponent;
  let fixture: ComponentFixture<BelieveStatChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelieveStatChansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelieveStatChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
