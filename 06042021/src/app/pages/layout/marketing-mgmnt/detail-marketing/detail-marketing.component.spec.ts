import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMarketingComponent } from './detail-marketing.component';

describe('DetailMarketingComponent', () => {
  let component: DetailMarketingComponent;
  let fixture: ComponentFixture<DetailMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
