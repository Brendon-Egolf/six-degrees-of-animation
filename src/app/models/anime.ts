import {Character} from './character';


export class Anime {

  constructor(
    public malId: string,
    public title: string,
    public url: string,
    public imageUrl: string,
    public characters: Character[]
  ) { }
}
