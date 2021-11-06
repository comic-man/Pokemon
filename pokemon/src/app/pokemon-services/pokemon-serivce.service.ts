import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonSerivceService {
  constructor(private http: HttpClient) { }
  
  getPokemon() {
    return this.http
    .get<string>('https://pokeapi.co/api/v2/{endpoint}/', {
      headers: new HttpHeaders().set('Accept', 'application/json',)
    })
  }
}
