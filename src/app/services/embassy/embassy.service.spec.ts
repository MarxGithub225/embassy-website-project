import { TestBed } from '@angular/core/testing';

import { EmbassyService } from './embassy.service';

describe('EmbassyService', () => {
  let service: EmbassyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbassyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
