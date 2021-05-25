import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOperateurComponent } from './list-operateur.component';

describe('ListOperateurComponent', () => {
  let component: ListOperateurComponent;
  let fixture: ComponentFixture<ListOperateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOperateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
