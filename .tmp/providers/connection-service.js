import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import 'rxjs/add/operator/map';
export var ConnectionService = (function () {
    function ConnectionService(platform) {
        this.platform = platform;
    }
    ConnectionService.prototype.getConnectionInfo = function () {
        var _this = this;
        return this.platform.ready().then(function () { return NativeStorage.getItem('connectionStorage'); })
            .then(function (data) {
            _this.ip = data.ip;
            _this.port = data.port;
            _this.error = false;
            return data;
        }).catch(function (error) {
            _this.error = true;
            return error;
        });
    };
    ConnectionService.prototype.createConnectionInfo = function (ip, port) {
        NativeStorage.setItem('connectionStorage', { ip: ip, port: port })
            .then(function () { return console.log('Stored Connection Information!'); }, function (error) { return console.error('Error storing connection information', error); });
    };
    ConnectionService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ConnectionService.ctorParameters = [
        { type: Platform, },
    ];
    return ConnectionService;
}());
