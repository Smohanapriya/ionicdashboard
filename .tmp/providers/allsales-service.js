import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';
/*
  Generated class for the AllsalesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var AllSalesService = (function () {
    function AllSalesService(http, connection) {
        this.http = http;
        this.http = http;
        this.connection = connection;
        this.connection.getConnectionInfo();
    }
    AllSalesService.prototype.getAllSalesData = function (code) {
        return this.http.get("http://" + this.connection.ip + ":" + this.connection.port + "/DasherAPI/public/api2/getCompanySalesSegmented?company=" + code);
    };
    AllSalesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AllSalesService.ctorParameters = [
        { type: Http, },
        { type: ConnectionService, },
    ];
    return AllSalesService;
}());
