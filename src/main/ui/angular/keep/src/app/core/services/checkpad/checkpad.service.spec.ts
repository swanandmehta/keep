import { TestBed } from '@angular/core/testing';

import { CheckpadService } from './checkpad.service';

describe('CheckpadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckpadService = TestBed.get(CheckpadService);
    expect(service).toBeTruthy();
  });
});
