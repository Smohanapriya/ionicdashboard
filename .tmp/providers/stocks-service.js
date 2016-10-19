import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the StocksService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var StocksService = (function () {
    function StocksService(http) {
        this.http = http;
        this.http = http;
    }
    StocksService.prototype.getStocksData = function () {
        return this.http.get("http://192.168.1.8:8080/DasherAPI/public/api2/getCompanyStocksFull");
    };
    StocksService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StocksService.ctorParameters = [
        { type: Http, },
    ];
    return StocksService;
}());
