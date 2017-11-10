import { TestBed, inject } from '@angular/core/testing';

import { AdvDataService } from './adv-data.service';

describe('AdvDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvDataService]
    });
  });

  it('should be created', inject([AdvDataService], (service: AdvDataService) => {
    expect(service).toBeTruthy();
  }));
});
