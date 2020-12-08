import { TestBed } from '@angular/core/testing';

import { SignupinService } from './signupin.service';

describe('SignupinService', () => {
  let service: SignupinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
