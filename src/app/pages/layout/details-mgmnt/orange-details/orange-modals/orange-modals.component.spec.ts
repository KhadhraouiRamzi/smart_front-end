import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeModalsComponent } from './orange-modals.component';

describe('OrangeModalsComponent', () => {
  let component: OrangeModalsComponent;
  let fixture: ComponentFixture<OrangeModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
