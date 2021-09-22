import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChansonComponent } from './detail-chanson.component';

describe('DetailChansonComponent', () => {
  let component: DetailChansonComponent;
  let fixture: ComponentFixture<DetailChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
