import { TestBed } from '@angular/core/testing';

import { PageGeneratorService } from './page-generator.service';

describe('PageGeneratorService', () => {
  let service: PageGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
