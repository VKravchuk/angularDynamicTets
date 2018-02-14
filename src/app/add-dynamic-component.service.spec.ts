import { TestBed, inject } from '@angular/core/testing';

import { AddDynamicComponentServiceService } from './add-dynamic-component.service';

describe('AddDynamicComponentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddDynamicComponentServiceService]
    });
  });

  it('should be created', inject([AddDynamicComponentServiceService], (service: AddDynamicComponentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
