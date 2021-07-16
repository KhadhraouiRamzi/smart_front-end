import { TestBed } from '@angular/core/testing';

import { DetailCrudService } from './detail-crud.service';

describe('DetailCrudService', () => {
  let service: DetailCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
