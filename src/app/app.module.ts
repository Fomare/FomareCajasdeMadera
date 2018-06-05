import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Módulos
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Servicios
import { ServiceModule } from './services/service.module';
import { AuthService } from './services/auth/auth.service';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig, serviceAccount } from './credentials';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthGuard } from './auth/auth.guard';
// FireAdmin
import * as admin from 'firebase-admin';

import * as nodemailer from 'nodemailer';


// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';
// import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    AngularFireModule.initializeApp(firebaseConfig)
   
    //AngularFireAuthModule 
  ],
  providers: [
    AuthService,
    AngularFirestore,
    AngularFireAuth,
    AngularFireDatabase,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
