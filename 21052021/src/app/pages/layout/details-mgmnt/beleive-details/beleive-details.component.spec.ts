import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeleiveDetailsComponent } from './beleive-details.component';

describe('BeleiveDetailsComponent', () => {
  let component: BeleiveDetailsComponent;
  let fixture: ComponentFixture<BeleiveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeleiveDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeleiveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
