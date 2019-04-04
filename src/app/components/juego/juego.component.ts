import { Component, OnInit } from '@angular/core';
import { Celda } from 'src/app/modelos/celda';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  public tablero: Celda[][]; // Tablero de celdas
  public tam: number; // Tamaño del tablero
  public estadoDeJuego: number; // 0 Jugando; 1 Game Over; 2 Victoria
  
  constructor() {
    this.tablero = [];
    this.tam = 8;
    this.estadoDeJuego = 0;
   }

  ngOnInit() {
  }


}
