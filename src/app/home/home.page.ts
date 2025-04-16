import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonToggle,
} from '@ionic/angular/standalone';
import { CapacitorFlash } from '@capgo/capacitor-flash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonToggle,
    IonText,
    IonCol,
    IonRow,
    IonGrid,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage {
  isActive: boolean = false;

  constructor() {}

  flash() {
    this.isActive = !this.isActive;
    if (this.isActive) {
      CapacitorFlash.switchOn({ intensity: 100 });
    } else {
      CapacitorFlash.switchOff();
    }
  }
}
