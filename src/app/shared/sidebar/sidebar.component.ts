import { AngularFireAuthModule } from "angularfire2/auth";
import { Component, OnInit } from "@angular/core";
import { SidebarService } from "../../services/service.index";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";
//import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styles: []
})
export class SidebarComponent {
  rol:string = "";
  user: Observable<firebase.User>;
  esAdmin:boolean;

  userProfiles: Observable<any[]>;
  authenticated: boolean = false;

  constructor(
    public _sidebar: SidebarService,
    public af: AngularFireAuth,
    public router: Router,
    public auth: AuthService    
  ) {

    this.esAdmin = auth.esAdmin;

    this.af.authState.subscribe(auth => {
      //console.log("AUTH: " + auth);

      if (auth != null) {
        this.user = af.authState;
        this.authenticated = true;
        //console.log();
      }
      else{
        this.authenticated = false;
        //this.router.navigate(['/login']);
      }
      //console.log("this.user: " + this.user);
      //console.log("this.authenticated: " + this.authenticated);
    });

    
    //const users = database.ref("userProfile");   
    /* 

    const database = firebase.database();
    const userRef = database.ref('userProfile');
    const queryUser = userRef.orderByChild('rol').equalTo('user');
    queryUser.on('child_added', snap => {
                console.log("SNAP.val JSON: "+JSON.stringify(snap.val()));
                //console.log("SNAP.val.rol: "+snap.val().rol);
                // fomare1979@hotmail.com
                var s = snap.val();
                var rol = snap.val().rol;
                console.log("--------fomare: "+s.email+', '+s.nombre+', '+s.rol); 
                var usuario = firebase.auth().currentUser;
                console.log('usuario: '+usuario);   
                
                //if(rol=='user' || auth == null){
                if(rol=='user'){
                  this.router.navigate(['/login']);
                  this. auth.logoutUser();
                }                            
    });  
*/


    // const db = firebase.database();
    // const userRef = db.ref("userProfile");    
    // const queryUser = userRef.orderByChild("rol").equalTo("user");
    // console.log('*******************************'+queryUser);
    // queryUser.on("child_added", snap => {
      
    //   this.rol = snap.val().rol;
    //   console.log("dentro de la query del sidebar, rol= "+this.rol);
    //   //this.router.navigate(["/login"]);
    //   //this.auth.logoutUser();
    // });
  }

  /*
  ngOnInit() {
    const database = firebase.database();
    const userRef = database.ref('userProfile');
    const queryUser = userRef.orderByChild('rol').equalTo('user');
    queryUser.on('child_added', snap => {
                console.log("SNAP.val JSON: "+JSON.stringify(snap.val()));
                //console.log("SNAP.val.rol: "+snap.val().rol);
                // fomare1979@hotmail.com
                var s = snap.val();
                var rol = snap.val().rol;
                console.log("--------fomare: "+s.email+', '+s.nombre+', '+s.rol); 
                var usuario = firebase.auth().currentUser;
                console.log('usuario: '+usuario);   
                
                //if(rol=='user' || auth == null){
                if(rol=='user'){
                  this.router.navigate(['/login']);
                  this. auth.logoutUser();
                }                            
    });  
  }*/
}
