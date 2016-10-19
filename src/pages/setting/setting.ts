import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';

/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
  providers: [ConnectionService]
})


export class SettingPage {
  connection: any;
  mode: any;
  service: ConnectionService;
  ip: string;
  port: string;
  constructor(public navCtrl: NavController, platform: Platform, service: ConnectionService, navParams: NavParams) {
    this.mode = navParams.get("mode");
    this.service = service;
    platform.ready().then(() => this.service.getConnectionInfo())
      .then(() => {
        if (this.mode != 0) {
          this.ip = this.service.ip;
          this.port = this.service.port;
        }
      });
  }
  ionViewDidLoad() {

  }
  onSubmit() {
    this.service.createConnectionInfo(this.ip, this.port);
    this.navCtrl.pop();
  }

}
