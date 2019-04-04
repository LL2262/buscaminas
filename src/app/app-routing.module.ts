import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoComponent } from './components/juego/juego.component';

const routes: Routes = [
  {path:'', component: JuegoComponent},
  {path:'juego', component: JuegoComponent},
  {path:'**', component: JuegoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
