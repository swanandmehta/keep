import { TestBed } from '@angular/core/testing';

import { HttpCommunicationService } from './http-communication.service';

describe('HttpCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpCommunicationService<any> = TestBed.get(HttpCommunicationService);
    expect(service).toBeTruthy();
  });
});
