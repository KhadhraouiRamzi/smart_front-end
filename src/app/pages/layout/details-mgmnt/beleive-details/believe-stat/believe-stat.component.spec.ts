import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelieveStatComponent } from './believe-stat.component';

describe('BelieveStatComponent', () => {
  let component: BelieveStatComponent;
  let fixture: ComponentFixture<BelieveStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelieveStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelieveStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
