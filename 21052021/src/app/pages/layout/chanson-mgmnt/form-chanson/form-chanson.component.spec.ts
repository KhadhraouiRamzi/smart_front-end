import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChansonComponent } from './form-chanson.component';

describe('FormChansonComponent', () => {
  let component: FormChansonComponent;
  let fixture: ComponentFixture<FormChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
