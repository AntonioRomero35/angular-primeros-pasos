import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  charactersList: Character[] = []

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id?:string):void{

    if(!id) return;

    this.onDelete.emit(id)

  }

}
