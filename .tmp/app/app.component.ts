import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, SQLite } from 'ionic-native';
import { HomePage } from '../pages/home/home';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  connection: any;
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
