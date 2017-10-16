import { TestBed, inject } from '@angular/core/testing';

import { DisplayGoleadoresService } from './display-goleadores.service';

describe('DisplayGoleadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayGoleadoresService]
    });
  });

  it('should be created', inject([DisplayGoleadoresService], (service: DisplayGoleadoresService) => {
    expect(service).toBeTruthy();
  }));
});
