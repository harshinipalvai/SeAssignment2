import { TestBed } from '@angular/core/testing';

import { ResServiceApiService } from './res-service-api.service';

describe('ResServiceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResServiceApiService = TestBed.get(ResServiceApiService);
    expect(service).toBeTruthy();
  });
});
