import { UsuarioService } from './../services/service.index';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario.model';
import { AuthService } from '../services/auth/auth.service';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { Reference } from '@firebase/database-types';
import Swal from 'sweetalert2';


declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  rol:string;
  userProfile: Reference;
  public email;
  public password;

  constructor( public router: Router, public authService: AuthService) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar( forma: NgForm ){

    if ( forma.invalid ){
      return;
    }    
    const email = forma.value.email;
    const password = forma.value.password;

      this.authService.loginUser(email, password).then(
        authData => { 
          
          ///////////////////
          /*

          firebase.auth().onAuthStateChanged( user => {
            if(user){
            //this.currentUser = user;
            this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
            console.log('+++ userProfile: '+this.userProfile)
            const query = this. userProfile.orderByChild('rol');
            query.on('value', snap => {
              console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'+snap.val().rol);
              var rol = snap.val().rol;
              if(rol=='user'){
                return false;
                //this.esAdmin = false;
                //this.router.navigate(['/login']);
                //this.logoutUser();
              }
              if(rol=='admin'){
                //this.esAdmin = true;
                this.router.navigate(['/dashboard']);
              }   
      
            })
            }
          });
          */
          //////////////////////





              //console.log('authData: '+authData);
              //const db = firebase.database();
              // const userRef = db.ref('userProfile');
                                  
              // const query = userRef.orderByChild('rol').equalTo('user');
              // query.on('child_added', snap => {
                          //console.log("SNAP.val JSON: "+JSON.stringify(snap.val()));
                          //console.log("SNAP.val.rol: "+snap.val().rol);
                          // fomare1979@hotmail.com
              //             this.rol = snap.val().rol;
              //             console.log("DENTRO DE login: "+this.rol);                          
              // });      

            
             //this.router.navigate(['/dashboard']);
             //console.log("DESPUES DE QUERY "+this.rol); 
             //console.log('authData'+JSON.stringify(authData));
              
          
        },
        error => {

          if(error.message == 'The password is invalid or the user does not have a password.'){
            Swal('Ups!','Contraseña incorrecta', 'error');            
          }
          if(error.message == 'There is no user record corresponding to this identifier. The user may have been deleted.'){
            Swal('Ups!','El usuario no existe', 'error');            
          } 
          if(error.message == 'The email address is badly formatted.'){
            Swal('Ups!','El email no tiene un formato correcto', 'error');            
          }         
          
        console.error('ERROR DEL LOGIN: '+error.message);
           
        }
      );
      
    }









    
  

}
