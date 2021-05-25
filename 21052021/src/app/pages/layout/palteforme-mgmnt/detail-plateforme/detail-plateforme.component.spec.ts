import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlateformeComponent } from './detail-plateforme.component';

describe('DetailPlateformeComponent', () => {
  let component: DetailPlateformeComponent;
  let fixture: ComponentFixture<DetailPlateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPlateformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
