import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';
/*
  Generated class for the StocksService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var StocksService = (function () {
    function StocksService(http, connection) {
        this.http = http;
        this.http = http;
        this.connection = connection;
        this.connection.getConnectionInfo();
    }
    StocksService.prototype.getStocksData = function () {
        return this.http.get("http://" + this.connection.ip + ":" + this.connection.port + "/DasherAPI/public/api2/getCompanyStocksFull");
    };
    StocksService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StocksService.ctorParameters = [
        { type: Http, },
        { type: ConnectionService, },
    ];
    return StocksService;
}());
