import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeDetailsComponent } from './orange-details.component';

describe('OrangeDetailsComponent', () => {
  let component: OrangeDetailsComponent;
  let fixture: ComponentFixture<OrangeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
