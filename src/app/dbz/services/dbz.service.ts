import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Yoyo',
      power: 100000
    },
    {
      id: uuid(),
      name: 'Rex',
      power: 2000
    },
    {
      id: uuid(),
      name: 'Winni',
      power: 30000
    }
  ]

    addCharacter(character: Character):void{
      const newCharacter:Character = {id: uuid(), ...character}
      this.characters.push(newCharacter);
    }

    deleteCharacterById(id:string):void{
      this.characters = this.characters.filter(character => character.id !== id);
    }


}
