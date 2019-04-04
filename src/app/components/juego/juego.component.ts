import { Component, OnInit } from '@angular/core';
import { Celda } from 'src/app/modelos/celda';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  public tablero: Celda[][];
  
  constructor() { }

  ngOnInit() {
  }

}
