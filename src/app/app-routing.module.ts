import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartaComponent } from './carta/carta.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonajesComponent } from './random/random.component';

const routes: Routes = [
  {
    path:'random',
    component:PersonajesComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'personaje/:id',
    component:CartaComponent
  },
  {
    path:'',
    component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
