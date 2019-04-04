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
  public minas: number;

  constructor() {
    this.tablero = [];
    this.tam = 8;
    this.estadoDeJuego = 0;
    this.minas = 10;
  }

  ngOnInit() {
    this.crearTablero();
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

  // Metodo utilizado para colocar las minas en el tablero
  colocarMinas() {
    for (var mina = 0; mina < this.minas; mina++) {

      var fila, columna;

      do {
        fila = Math.floor((Math.random() * 8)); // Numero aleatorio para las filas
        columna = Math.floor((Math.random() * 8)); // Numero aleatorio para las columnas
      } while (this.tablero[fila][columna].esMina == true); // Permite que solo se coloque una mina en la celda

      this.tablero[fila][columna].esMina = true; // Coloco mina

      // Agregamos a las celdas la cantidad de minas que hay a su alrrededor
      for (var fila2 = this.max(0, fila - 1); fila2 < this.min(this.tam, fila + 2); fila2++) {
        for (var columna2 = this.max(0, columna - 1); columna2 < this.min(this.tam, columna + 2); columna2++) {
          if (this.tablero[fila2][columna2].esMina == false) { // Si la celda no es una bomba
            this.tablero[fila2][columna2].probabilidad++; // Incrementa el contador de minas
          }
        }
      }
    }
  }

  // Metodos utilizados para no pasarse de los bordes del tablero
  max(a, b) {
    return Math.max(a, b);
  }
  min(a, b) {
    return Math.min(a, b);
  }

  // Metodo para agregar bandera
  onRightClick(fila, columna) {
    if (this.estadoDeJuego == 0) { // Verifico que se esta jugando
      if (!this.tablero[fila][columna].descubierta) { // Verifico que la celda NO este descubierta
        this.tablero[fila][columna].bandera = true; // Agrego bandera
      }
    }
    return false; // Evita desplegar el menu de opciones de pagina
  }

}
