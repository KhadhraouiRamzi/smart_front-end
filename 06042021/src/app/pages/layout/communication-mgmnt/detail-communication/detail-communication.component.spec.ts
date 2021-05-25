import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommunicationComponent } from './detail-communication.component';

describe('DetailCommunicationComponent', () => {
  let component: DetailCommunicationComponent;
  let fixture: ComponentFixture<DetailCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
