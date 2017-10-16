import { Component, OnInit } from '@angular/core';

import { Goleador } from '../goleador';

import { DisplayGoleadoresService } from '../display-goleadores.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  providers: [DisplayGoleadoresService]
})

export class LeftComponent implements OnInit {
  title: "Lideres Goleadores";
  goleadores : Goleador [];
  order: string = 'goles';
  reverse: boolean = true;
  limitTo: number = 15;

  constructor(private displayGoleadoresService: DisplayGoleadoresService) { }

  getGoleadores(): void{
    console.log("getGoleadores from LeftComponent");
    this.displayGoleadoresService.getGoleadores().then(goleadores => this.goleadores = goleadores);
  }

  ngOnInit() {
    console.log("ngOnInit en LeftComponent");
    this.getGoleadores();
  }

}
