import { TestBed } from '@angular/core/testing';

import { DynamicUserService } from './dynamic-user.service';

describe('DynamicUserService', () => {
  let service: DynamicUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
