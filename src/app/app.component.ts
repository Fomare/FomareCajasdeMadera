import { SettingsService } from "./services/service.index";
import { Component } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  constructor(public _ajustes: SettingsService, db: AngularFirestore) {
    
  }
}
