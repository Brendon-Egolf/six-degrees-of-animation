import { Injectable } from '@angular/core';
import { Graph } from 'graphlib';
import {Character} from '../models/character';
import {JikanApiService} from './jikan-api.service';
import {Anime} from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeGraphService {
  animeGraph: Graph;
  characters: Character[];
  animeList: Anime[];

  constructor(private jikanService: JikanApiService) { }

  constructCharacters() {
    this.jikanService.getCharacterList('37430')
      .subscribe(
        (res) => this.characters = res.characters.map(character => new Character(character))
      );
  }

}
