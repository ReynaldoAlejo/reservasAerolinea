import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VueloComponent } from './components/vuelo/vuelo.component';


const routes:Routes=[


  {path:'vuelos', component:VueloComponent},
  { path: '', redirectTo: '/vuelos', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
