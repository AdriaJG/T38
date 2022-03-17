import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajesComponent } from './random/random.component';
import { CommonModule } from '@angular/common';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { CartaComponent } from './carta/carta.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PersonajesComponent,
    CartaComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
