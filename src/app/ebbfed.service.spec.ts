import { TestBed } from '@angular/core/testing';

import { EBBFEDService } from './ebbfed.service';

describe('EBBFEDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EBBFEDService = TestBed.get(EBBFEDService);
    expect(service).toBeTruthy();
  });
});
