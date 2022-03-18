import { TestBed } from '@angular/core/testing';

import { DogServiceService } from './dog-service.service';

describe('DogServiceService', () => {
  let service: DogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
