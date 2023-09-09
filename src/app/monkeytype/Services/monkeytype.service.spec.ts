import { TestBed } from '@angular/core/testing';

import { MonkeytypeService } from './monkeytype.service';

describe('MonkeytypeService', () => {
  let service: MonkeytypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonkeytypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
