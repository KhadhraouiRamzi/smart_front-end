import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChansonComponent } from './edit-chanson.component';

describe('EditChansonComponent', () => {
  let component: EditChansonComponent;
  let fixture: ComponentFixture<EditChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
