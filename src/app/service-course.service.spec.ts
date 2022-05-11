import { TestBed } from '@angular/core/testing';

import { ServiceCourseService } from './service-course.service';

describe('ServiceCourseService', () => {
  let service: ServiceCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
