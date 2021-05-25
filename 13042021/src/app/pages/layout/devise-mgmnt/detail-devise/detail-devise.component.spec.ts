import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDeviseComponent } from './detail-devise.component';

describe('DetailDeviseComponent', () => {
  let component: DetailDeviseComponent;
  let fixture: ComponentFixture<DetailDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDeviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
