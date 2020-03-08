import { TestBed } from '@angular/core/testing';

import { CustumerResolverService } from './custumer-resolver.service';

describe('CustumerResolverService', () => {
  let service: CustumerResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustumerResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
