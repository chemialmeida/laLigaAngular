import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';

import { Equipo } from '../equipos';

import { DisplayClasificacionService } from '../display-clasificacion.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers: [DisplayClasificacionService]
})

export class RightComponent implements OnInit {
  title = 'Clasificacion';
  equipos : Equipo[];
  order: string = 'PTS';
  reverse: boolean = true;

  constructor(private displayClasificacionService: DisplayClasificacionService) { }

  getEquipos(): void{
    console.log("getEquipos en RightComponent");
    this.displayClasificacionService.getEquipos().then(equipos => this.equipos = equipos);
  }

  ngOnInit() {
    console.log("ngOnInit en RightComponent");
    this.getEquipos();
  }
}
