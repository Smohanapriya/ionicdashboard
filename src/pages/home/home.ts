import { Component } from '@angular/core';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { SalePage } from '../sale/sale';
import { StockPage } from '../stock/stock';
import { PurchasePage } from '../purchase/purchase';
import { StaffPage } from '../staff/staff';
import { SettingPage } from '../setting/setting';
import { ConnectionService } from '../../providers/connection-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers:[ConnectionService]
})
export class HomePage {

    connection: any;
    constructor(public navCtrl: NavController, platform: Platform, service: ConnectionService, private alertCtrl: AlertController) {
        this.navCtrl = navCtrl;
        platform.ready().then(() => service.getConnectionInfo())
            .then(data => {
                if (service.error == true) {
                    this.navCtrl.push(SettingPage, {
                        mode: 0
                    });
                }
            });
    }


    presentAlert(msg: string) {
        let alert = this.alertCtrl.create({
            title: 'Info!',
            subTitle: msg,
            buttons: ['Dismiss']
        });
        alert.present();
    }

    goToSale() {
        this.navCtrl.push(SalePage);
    }
    goToStock() {
        this.navCtrl.push(StockPage);
    }
    goToPurchase() {
        this.navCtrl.push(PurchasePage);
    }
    goToStaff() {
        this.navCtrl.push(StaffPage);
    }
    goToSetting() {
        this.navCtrl.push(SettingPage, {
            mode: 1
        });
    }

}
