import { TestBed } from '@angular/core/testing';

import { WeathercallService } from './weathercall.service';

describe('WeathercallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeathercallService = TestBed.get(WeathercallService);
    expect(service).toBeTruthy();
  });
});
