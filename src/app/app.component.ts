import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
//esto solo es una clase, con un decorator
export class AppComponent {

  //estas dos formas estan bien, los detecta como variables
  public title:string = 'Hola Mundo';

}
