import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  
  // Ajustes por defecto:
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) { 
    this.cargarAjustes();
  }

  guardarAjustes(){
    // Como localStorage sólo guarda strings, tengo que pasar  el objeto Ajustes a un string
    //console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes',JSON.stringify( this.ajustes ));
  }  

  cargarAjustes(){
    // Ahora convierto el string en un objeto CON json.PARSE:
    if( localStorage.getItem('ajustes') ){
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      //console.log('Cargando del localStorage');

      this.aplicarTema( this.ajustes.tema );

    }else{
      //console.log('Usando valores por defecto');
      this.aplicarTema( this.ajustes.tema );
    }
  }

  aplicarTema( tema: string ){

    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href',url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();

  }

}

// Creo la interfaz para que typescript me ayude
interface Ajustes{
  temaUrl: string;
  tema: string;
}
