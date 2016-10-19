import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the AllsalesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var AllSalesService = (function () {
    function AllSalesService(http) {
        this.http = http;
        this.http = http;
    }
    AllSalesService.prototype.getAllSalesData = function (code) {
        return this.http.get("http://192.168.1.8:8080/DasherAPI/public/api2/getCompanySalesSegmented?company=" + code);
    };
    AllSalesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AllSalesService.ctorParameters = [
        { type: Http, },
    ];
    return AllSalesService;
}());
