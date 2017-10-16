import { Injectable } from '@angular/core';

import { Equipo } from './equipos';

import { equipo } from './mock-data-team';

@Injectable()
export class DisplayClasificacionService {
  getEquipos(): Promise<Equipo[]>{
    //console.log("getEquipos en displayClasificacionService");
    //console.log(Promise.resolve(equipo));
    return Promise.resolve(equipo);
  }

}
