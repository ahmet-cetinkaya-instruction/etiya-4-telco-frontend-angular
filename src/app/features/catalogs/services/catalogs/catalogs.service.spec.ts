import { TestBed } from '@angular/core/testing';

import { CatalogsService } from './catalogs.service';

describe('CatalogsService', () => {
  let service: CatalogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
