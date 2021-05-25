import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArtisteComponent } from './detail-artiste.component';

describe('DetailArtisteComponent', () => {
  let component: DetailArtisteComponent;
  let fixture: ComponentFixture<DetailArtisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArtisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
