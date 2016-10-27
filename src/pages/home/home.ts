import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { SalePage } from '../sale/sale';
import { StockPage } from '../stock/stock';
import { PurchasePage } from '../purchase/purchase';
import { StaffPage } from '../staff/staff';
import { SettingPage } from '../setting/setting';
import { ConnectionService } from '../../providers/connection-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: []
})
export class HomePage {

    connection: any;
    constructor(public navCtrl: NavController, platform: Platform, service: ConnectionService) {
        this.navCtrl = navCtrl;
        platform.ready().then(() => service.getConnectionInfo())
            .then(
            data => {
                if (service.error == true) {
                    this.navCtrl.push(SettingPage, {
                        mode: 0
                    });
                }
            }
            );
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
