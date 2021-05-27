import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArtisteComponent } from './form-artiste.component';

describe('FormArtisteComponent', () => {
  let component: FormArtisteComponent;
  let fixture: ComponentFixture<FormArtisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArtisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
