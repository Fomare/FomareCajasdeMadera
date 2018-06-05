import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  esAdmin:boolean;

  constructor(public auth: AuthService) {

    //this.esAdmin = this.auth.esAdmin;
    
   }

  ngOnInit() {
  }

  salir(){

    Swal({
      title: 'Cerrar sesión',
      text: '¿Estás seguro?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Si, salir!',
      cancelButtonText: 'No, quedarme'
    }).then((result) => {
      if (result.value) {              
        this.auth.logoutUser();    
      }
    });

    
  }

}
