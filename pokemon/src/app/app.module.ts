import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonPowersComponent } from './pokemon-powers/pokemon-powers.component';
import { PokemonNameComponent } from './pokemon-name/pokemon-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonPowersComponent,
    PokemonNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
