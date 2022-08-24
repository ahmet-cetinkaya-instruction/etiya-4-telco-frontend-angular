import { TestBed } from '@angular/core/testing';

import { OverlayLoadingInterceptor } from './overlay-loading.interceptor';

describe('OverlayLoadingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      OverlayLoadingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: OverlayLoadingInterceptor = TestBed.inject(OverlayLoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
