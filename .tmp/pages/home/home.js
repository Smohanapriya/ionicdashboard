import { Component } from '@angular/core';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { SalePage } from '../sale/sale';
import { StockPage } from '../stock/stock';
import { PurchasePage } from '../purchase/purchase';
import { StaffPage } from '../staff/staff';
import { SettingPage } from '../setting/setting';
import { ConnectionService } from '../../providers/connection-service';
export var HomePage = (function () {
    function HomePage(navCtrl, platform, service, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        platform.ready().then(function () { return service.getConnectionInfo(); })
            .then(function (data) {
            if (service.error == true) {
                _this.navCtrl.push(SettingPage, {
                    mode: 0
                });
            }
        });
    }
    HomePage.prototype.presentAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Info!',
            subTitle: msg,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HomePage.prototype.goToSale = function () {
        this.navCtrl.push(SalePage);
    };
    HomePage.prototype.goToStock = function () {
        this.navCtrl.push(StockPage);
    };
    HomePage.prototype.goToPurchase = function () {
        this.navCtrl.push(PurchasePage);
    };
    HomePage.prototype.goToStaff = function () {
        this.navCtrl.push(StaffPage);
    };
    HomePage.prototype.goToSetting = function () {
        this.navCtrl.push(SettingPage, {
            mode: 1
        });
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html',
                    providers: []
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: Platform, },
        { type: ConnectionService, },
        { type: AlertController, },
    ];
    return HomePage;
}());
