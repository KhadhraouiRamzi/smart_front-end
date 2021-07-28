import { TestBed } from '@angular/core/testing';

import { BelieveService } from './believe.service';

describe('BelieveService', () => {
  let service: BelieveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BelieveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
