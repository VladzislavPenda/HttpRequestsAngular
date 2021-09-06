import { TestBed } from '@angular/core/testing';

import { CategoryHttpServiceService } from './category-http-service.service';

describe('CategoryHttpServiceService', () => {
  let service: CategoryHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
