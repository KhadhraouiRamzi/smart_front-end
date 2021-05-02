import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerDetailsComponent } from './deezer-details.component';

describe('DeezerDetailsComponent', () => {
  let component: DeezerDetailsComponent;
  let fixture: ComponentFixture<DeezerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
