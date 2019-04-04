import { Component, OnInit } from '@angular/core';
import { Cronometro } from 'src/app/modelos/cronometro';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  public cronometro: Cronometro;
  public intervalo;

  constructor() {
    this.cronometro = new Cronometro(0, 0, 0);
   }

  ngOnInit() {
    this.start();
  }

  start(){
    this.intervalo = 0;
    this.intervalo = setInterval(()=>{
      this.cronometro.segundos +=1;
      if(this.cronometro.segundos == 60){
        this.cronometro.segundos = 0;
        this.cronometro.minutos +=1;
        if(this.cronometro.minutos == 60){
          this.cronometro.minutos = 0;
          this.cronometro.horas +=1;
          if(this.cronometro.horas == 24){
            this.cronometro.horas = 0;
          }
        }
      }
    }, 1000);
  }

}
