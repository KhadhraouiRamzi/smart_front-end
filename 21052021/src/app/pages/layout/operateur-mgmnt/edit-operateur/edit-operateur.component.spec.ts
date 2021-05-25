import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOperateurComponent } from './edit-operateur.component';

describe('EditOperateurComponent', () => {
  let component: EditOperateurComponent;
  let fixture: ComponentFixture<EditOperateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOperateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
