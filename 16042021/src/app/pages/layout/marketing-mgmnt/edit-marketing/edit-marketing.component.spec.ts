import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarketingComponent } from './edit-marketing.component';

describe('EditMarketingComponent', () => {
  let component: EditMarketingComponent;
  let fixture: ComponentFixture<EditMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
