import { TestBed, inject } from '@angular/core/testing';

import { DisplayClasificacionService } from './display-clasificacion.service';

describe('DisplayClasificacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayClasificacionService]
    });
  });

  it('should be created', inject([DisplayClasificacionService], (service: DisplayClasificacionService) => {
    expect(service).toBeTruthy();
  }));
});
