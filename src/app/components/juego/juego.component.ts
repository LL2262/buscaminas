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

  // Metodo que inicializa las celdas del tablero
  crearTablero() {
    for (var fila: number = 0; fila < this.tam; fila++) {
      this.tablero[fila] = [];
      for (var columna: number = 0; columna < this.tam; columna++) {
        this.tablero[fila][columna] = new Celda(false, false, false, 0);
      }
    }
  }

}
