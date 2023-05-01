import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { environmentePokeapi as env } from '../../../../environments/environments.pokeapi';
import { PokemonNames } from 'src/app/shared/models/pokemon-names/pokemon-names.model';
import { Pokemon } from 'src/app/shared/models/pokemon/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private header = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  getPokemonsNames(): Observable<PokemonNames | null> {
    const params = new HttpParams().appendAll({
      limit: 2000,
    });

    return this.httpClient.get<PokemonNames>(env.baseUrl + 'pokemon/', {
      headers: this.header,
      params: params,
    });
  }

  getPokemons(): Observable<Pokemon[]> {
    const pokemons: Pokemon[] = [];

    return this.getPokemonsNames().pipe(
      switchMap((result) => {
        const requests: Observable<Pokemon>[] = [];

        result?.results?.forEach((r) => {
          requests.push(this.httpClient.get<Pokemon>(`${r.url}`, { headers: this.header }));
        });

        return forkJoin(requests);
      }),
      map((pokemonsList) => {
        pokemonsList.forEach((pokemon) => {
          if (pokemon != null) {
            pokemons.push(pokemon);
          }
        });

        return pokemons;
      })
    );
  }
}
