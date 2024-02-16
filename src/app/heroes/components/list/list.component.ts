import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  notHeroName:string | undefined = '' ;
  heroNames:string[] = ['Pemuche', 'Carbon', 'Yoyo', 'Rex', 'Winny', 'Luna']
  theLastName:string  = this.heroNames[0]

  removeLastHero():void{
    this.notHeroName = this.heroNames.pop();
  }

  resetHeroNames():void{
    this.heroNames= ['Pemuche', 'Carbon', 'Yoyo', 'Rex', 'Winny', 'Luna'];
    this.notHeroName = '';
  }

}
