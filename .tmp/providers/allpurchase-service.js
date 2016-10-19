import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';
/*
  Generated class for the AllpurchaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var AllPurchaseService = (function () {
    function AllPurchaseService(http, connection) {
        this.http = http;
        this.http = http;
        this.connection = connection;
        this.connection.getConnectionInfo();
    }
    AllPurchaseService.prototype.getAllPurchaseData = function (code) {
        return this.http.get("http://" + this.connection.ip + ":" + this.connection.port + "/DasherAPI/public/api2/getCompanyPurchaseSegmented?company=" + code);
    };
    AllPurchaseService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AllPurchaseService.ctorParameters = [
        { type: Http, },
        { type: ConnectionService, },
    ];
    return AllPurchaseService;
}());
