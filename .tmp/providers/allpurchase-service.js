import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
/*
  Generated class for the AllpurchaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var AllPurchaseService = (function () {
    function AllPurchaseService(http, platform) {
        this.http = http;
        this.http = http;
    }
    AllPurchaseService.prototype.getAllPurchaseData = function (code) {
        return this.http.get("http://192.168.1.8:8080/DasherAPI/public/api2/getCompanyPurchaseSegmented?company=" + code);
    };
    AllPurchaseService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AllPurchaseService.ctorParameters = [
        { type: Http, },
        { type: Platform, },
    ];
    return AllPurchaseService;
}());
