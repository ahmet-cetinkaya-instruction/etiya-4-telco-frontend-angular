import { TestBed } from '@angular/core/testing';

import { OverlayLoadingService } from './overlay-loading.service';

describe('OverlayLoadingService', () => {
  let service: OverlayLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
