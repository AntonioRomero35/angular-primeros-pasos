import { Component } from '@angular/core';

@Component({
  //el selector es la forma en la que lo invocamos en otro componente HTML
  selector: 'app-counter',
  //el template es la parte del html literal es HTML
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent  {
  constructor() { }

  counter = 10;

  increaseBy(value:number):void{
    this.counter +=value;
  }

  reset():void{
    this.counter =10;
  }

}
