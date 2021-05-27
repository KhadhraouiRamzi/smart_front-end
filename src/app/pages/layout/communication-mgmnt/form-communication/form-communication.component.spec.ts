import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommunicationComponent } from './form-communication.component';

describe('FormCommunicationComponent', () => {
  let component: FormCommunicationComponent;
  let fixture: ComponentFixture<FormCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
