import { TestBed } from '@angular/core/testing';

import { HistCommunicationService } from './hist-communication.service';

describe('HistCommunicationService', () => {
  let service: HistCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
