import { SettingsService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';
//import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {

    this.colocarCheck();

  }

  cambiarColor( tema: string, link: any ){
    
    this.aplicarCheck( link );

    this._ajustes.aplicarTema( tema );
    
  }

  aplicarCheck( link: any ){
    
    let selectores:any = document.getElementsByClassName('selector');

    //con un for eliminamos la clase working de selector, que es lo que muestra un ckeck sobre el color seleccionado
    for( let ref of selectores ){
      ref.classList.remove('working');
    }

    //ahora agrego el check a la clase que selecciono
    link.classList.add('working');
  }

  colocarCheck(){

    let selectores:any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for( let ref of selectores ){
      if( ref.getAttribute('data-theme') === tema ){
        ref.classList.add('working');
        break;
      }
    }

  }

}
