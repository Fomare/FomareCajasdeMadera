import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
//import {FirebaseDatabase} from 'firebase-database';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styles: []
})
export class DashboardComponent implements OnInit {  

  esAdmin:boolean;
  
  constructor(public router: Router, public auth: AuthService, db: AngularFireDatabase) {

    //this.esAdmin = auth.esAdmin;
    
    /*
    const database = firebase.database();
    //const users = database.ref("userProfile");    

    
    const userRef = database.ref('userProfile');
    const queryUser = userRef.orderByChild('rol').equalTo('user');
    queryUser.on('child_added', snap => {
                console.log("SNAP.val JSON: "+JSON.stringify(snap.val()));
                //console.log("SNAP.val.rol: "+snap.val().rol);
                // fomare1979@hotmail.com
                var s = snap.val();
                var rol = snap.val().rol;
                console.log("--------fomare: "+s.email+', '+s.nombre+', '+s.rol);    
                
                if(rol=='user'){
                  this.router.navigate(['/login']);
                  this. auth.logoutUser();
                }

                var usuario = firebase.auth().currentUser;
                console.log('usuario: '+usuario);
                
                
    });  
*/
    

    
    //                query.on('value', snap =>{
     // console.log('Objeto: ' + JSON.stringify(snap.val()));
      // var key = snap.key;      
      // var childKey = snap.child('rol').val();
      // var nombre = snap.child("userProfile/name").val();
      // console.log('------NOMBRE: '+nombre);
      
      // console.log('Key: '+key);
      // console.log('childKey: '+childKey);
      // var rol = childKey;
    //  var rol = snap.val().rol;
    //  console.log('ROL: '+rol);
    //})



















      /*
    const twoRef = firebase.database().ref().child('userProfile').orderByChild('rol').equalTo('user');
    console.log('twoRef: '+twoRef);

    const ref = twoRef;
    ref.once("value").then( function (snapshot){
      var data = snapshot.val();
      console.log('data: '+data);
    } )
*/
    
  


      

    
    
    //                 queryUser.on("child_added", snap => {
    //   console.log("dentro de la query del dashboard");
    //   this.rol = snap.val().rol;
    //   this.router.navigate(["/login"]);
    //   this.auth.logoutUser();
    // });
    
    /*
    const starCountRef  = rootRef.child('userProfile').orderByChild('rol').equalTo('user');
    
    starCountRef.on('value', function(snapshot) {
      //console.log('1111111111111111111111'+snapshot.val().rol);
      this.u = snapshot.val();
      console.log('u: '+this.u)
      // this.u = snapshot.val();
      // this.usuario = JSON.stringify(this.u);
      // console.log('USUARIO: '+this.usuario)
    });
    */

    // this.books = db.list('/userProfile').valueChanges();
    // console.log('-------------'+this.books+'-------');
    // this.books.subscribe( books => {
    //   this.allProfiles = books.values().rol;
    //   console.log('FOMARE: '+this.allProfiles);
    // })
    
    /*
    const db = firebase.database();
    const userRef = db.ref("userProfile");

    console.log("Dentro del constructor dashboard");

    const queryUser = userRef.orderByChild("rol").equalTo("user");
    queryUser.on("child_added", snap => {
      console.log("dentro de la query del dashboard");
      this.rol = snap.val().rol;
      this.router.navigate(["/login"]);
      this.auth.logoutUser();
    });*/

    // var ref = firebase.database().ref("userProfile");
    // ref
    //   .orderByChild("rol")
    //   .equalTo("user")
    //   .on("child_added", function(snapshot) {
    //     console.log("FOMAREEEEEE: " + snapshot.key);
    //   });

    

    
    //console.log("FIN del constructor dashboard");
  }

  ngOnInit() {}
}
