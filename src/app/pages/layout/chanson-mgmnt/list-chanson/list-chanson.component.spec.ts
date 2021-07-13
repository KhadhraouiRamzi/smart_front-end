import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChansonComponent } from './list-chanson.component';

describe('ListChansonComponent', () => {
  let component: ListChansonComponent;
  let fixture: ComponentFixture<ListChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
