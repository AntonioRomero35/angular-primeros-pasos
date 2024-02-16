import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  private name = 'ironman';
  private age = 45;

  get getName() : string {
    return this.name
  }

  get getAge():number {
    return this.age;
  }

  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `Heroe: ${this.name}, Edad: ${this.age} `;
  }

  changeHero():void{
      this.name = 'Goku';


  }

  changeAge():void{
      this.age = 40
  }

  resetAll():void{
    this.name ='ironman';
    this.age = 45;
  }



}
