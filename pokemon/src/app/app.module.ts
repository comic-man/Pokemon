import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonNameComponent } from './pokemon-name/pokemon-name.component';
import { PokemonServicesComponent } from './pokemon-services/pokemon-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonNameComponent,
    PokemonServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
