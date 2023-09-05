import { TestBed } from '@angular/core/testing';

import { EmailSenderServiceService } from './email-sender-service.service';

describe('EmailSenderServiceService', () => {
  let service: EmailSenderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailSenderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
