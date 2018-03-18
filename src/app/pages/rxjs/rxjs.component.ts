import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 

    this.subscription = this.regresaObservable()      
      .subscribe(    // Los subscribes tienen 3 callbacks
        numero => console.log( 'Subscripción', numero ),
        error => console.error('Error en el observador', error),
        () => console.log('El observador terminó')
      );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La página se va a cerrar');  
    this.subscription.unsubscribe();  
  }

  regresaObservable(): Observable<any> {

    return  new Observable( observer => {

      let contador = 0;

      let intervalo = setInterval( () =>{

        contador += 1;

        let salida = {
          valor: contador
        };

        observer.next( salida ); // next() se usa para notificar o emitir          

        // if ( contador === 3 ){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if ( contador === 2 ){                 
        //   observer.error('Auxilio');
        // }

      }, 500);

    })
    .retry(2)  // el 2 son los números de reintentos
    // .map() se le puede agregar a un objeto que devuelva un observable
    .map ( (resp: any) => {   // la respuesta es lo que el observador está emitiendo next(salida)  
      
      return resp.valor;
    
    })
    .filter( (valor, index) => {

      // voy a dejar pasar sólo los números impares
      if( (valor % 2 ) === 1 ){
        //impar
        return true;
      }else{
        //par
        return false;
      }
       

      console.log('Filter', valor, index)
      return true;

    })   // lo ideal es ponerlo después del .map()

    
  }

}
