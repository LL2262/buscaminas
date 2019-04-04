import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoComponent } from './components/juego/juego.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'juego', component: JuegoComponent},
  {path:'**', component: InicioComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
