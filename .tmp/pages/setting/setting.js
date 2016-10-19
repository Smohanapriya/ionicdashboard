import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';
/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SettingPage = (function () {
    function SettingPage(navCtrl, platform, service, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.mode = navParams.get("mode");
        this.service = service;
        platform.ready().then(function () { return _this.service.getConnectionInfo(); })
            .then(function () {
            if (_this.mode != 0) {
                _this.ip = _this.service.ip;
                _this.port = _this.service.port;
            }
        });
    }
    SettingPage.prototype.ionViewDidLoad = function () {
    };
    SettingPage.prototype.onSubmit = function () {
        this.service.createConnectionInfo(this.ip, this.port);
        this.navCtrl.pop();
    };
    SettingPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-setting',
                    templateUrl: 'setting.html',
                    providers: []
                },] },
    ];
    /** @nocollapse */
    SettingPage.ctorParameters = [
        { type: NavController, },
        { type: Platform, },
        { type: ConnectionService, },
        { type: NavParams, },
    ];
    return SettingPage;
}());
