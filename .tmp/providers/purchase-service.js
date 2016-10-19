import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var PurchaseService = (function () {
    function PurchaseService(http) {
        this.http = http;
        this.http = http;
    }
    PurchaseService.prototype.getPurchaseData = function () {
        return this.http.get("http://192.168.1.8:8080/DasherAPI/public/api2/getCompanyPurchaseFull");
    };
    PurchaseService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PurchaseService.ctorParameters = [
        { type: Http, },
    ];
    return PurchaseService;
}());
