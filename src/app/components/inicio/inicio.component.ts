import { Component, OnInit } from '@angular/core';
import { Nivel } from 'src/app/modelos/Nivel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public nivel: Nivel;
  public niveles: Nivel[];

  constructor(private router: Router) { 
    this.nivel = new Nivel('', 0, 0, 0);
    this.niveles = [
      {dificultad: 'Facil', filas: 8, columnas:8, minas: 10},
      {dificultad: 'Medio', filas: 10, columnas:10, minas: 15},
      {dificultad: 'Dificil', filas: 12, columnas:12, minas: 20},
    ]
  }

  ngOnInit() {
  }

  onSubmit(){
    localStorage.setItem('dificultad', JSON.stringify(this.nivel));
    this.router.navigate(['/juego']);

  }

}
