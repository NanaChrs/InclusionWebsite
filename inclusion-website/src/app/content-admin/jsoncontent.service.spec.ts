import { TestBed } from '@angular/core/testing';

import { JsoncontentService } from './jsoncontent.service';

describe('JsoncontentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsoncontentService = TestBed.get(JsoncontentService);
    expect(service).toBeTruthy();
  });
});
