import { TestBed, inject } from '@angular/core/testing';

import { SetLoginService } from './set-login.service';

describe('SetLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetLoginService]
    });
  });

  it('should be created', inject([SetLoginService], (service: SetLoginService) => {
    expect(service).toBeTruthy();
  }));
});
