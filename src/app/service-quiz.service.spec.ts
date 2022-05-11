import { TestBed } from '@angular/core/testing';

import { ServiceQuizService } from './service-quiz.service';

describe('ServiceQuizService', () => {
  let service: ServiceQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
