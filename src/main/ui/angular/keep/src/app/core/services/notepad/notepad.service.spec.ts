import { TestBed } from '@angular/core/testing';

import { NotepadService } from './notepad.service';

describe('NotepadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotepadService = TestBed.get(NotepadService);
    expect(service).toBeTruthy();
  });
});
