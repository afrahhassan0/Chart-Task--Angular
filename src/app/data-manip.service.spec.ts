import { TestBed } from '@angular/core/testing';

import { DataManipService } from './data-manip.service';

describe('DataManipService', () => {
  let service: DataManipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataManipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
