import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeviseComponent } from './list-devise.component';

describe('ListDeviseComponent', () => {
  let component: ListDeviseComponent;
  let fixture: ComponentFixture<ListDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
