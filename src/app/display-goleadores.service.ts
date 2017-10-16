import { Injectable } from '@angular/core';

import { Goleador } from './goleador';

import { goleador } from './mock-data-goleadores';

@Injectable()
export class DisplayGoleadoresService {
  getGoleadores(): Promise<Goleador[]>{
    console.log("getGoleadores from DisplayGoleadoresService");
    return Promise.resolve(goleador);
  }

}
