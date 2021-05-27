import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOperateurComponent } from './detail-operateur.component';

describe('DetailOperateurComponent', () => {
  let component: DetailOperateurComponent;
  let fixture: ComponentFixture<DetailOperateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOperateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
