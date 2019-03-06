import { TestBed } from '@angular/core/testing';

import { AnimeGraphService } from './anime-graph.service';

describe('AnimeGraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeGraphService = TestBed.get(AnimeGraphService);
    expect(service).toBeTruthy();
  });
});
