import { TestBed } from '@angular/core/testing';

import { JikanApiService } from './jikan-api.service';

describe('JikanApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JikanApiService = TestBed.get(JikanApiService);
    expect(service).toBeTruthy();
  });
});
