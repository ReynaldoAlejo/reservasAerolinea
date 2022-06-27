import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VueloComponent } from './components/vuelo/vuelo.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { VueloIndexComponent } from './components/vuelo/vuelo-index/vuelo-index.component';


@NgModule({
  declarations: [
    AppComponent,
    VueloComponent,
    ClienteComponent,
    VueloIndexComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
