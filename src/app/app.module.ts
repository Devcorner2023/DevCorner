import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SeccioncomentariosComponent } from './componentes/seccioncomentarios/seccioncomentarios.component';
import { CarouselComponent } from './componentes/carousel/carousel.component'; 
import { MainComponent } from './componentes/main/main.component'; 
import { GuiaComponent } from './componentes/guia/guia.component'; 
import { CardsComponent } from './componentes/cards/cards.component'; 
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './componentes/footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeccioncomentariosComponent,
    CarouselComponent,
    MainComponent,
    GuiaComponent,
    CardsComponent,
    ContactoComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
