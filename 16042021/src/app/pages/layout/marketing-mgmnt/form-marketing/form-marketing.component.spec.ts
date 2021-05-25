import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMarketingComponent } from './form-marketing.component';

describe('FormMarketingComponent', () => {
  let component: FormMarketingComponent;
  let fixture: ComponentFixture<FormMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
