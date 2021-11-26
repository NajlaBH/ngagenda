import { TestBed } from '@angular/core/testing';

import { NvbarService } from './nvbar.service';

describe('NvbarService', () => {
  let service: NvbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NvbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
