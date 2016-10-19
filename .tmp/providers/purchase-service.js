import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';
export var PurchaseService = (function () {
    function PurchaseService(http, connection) {
        this.http = http;
        this.connection = connection;
        this.http = http;
        this.connection.getConnectionInfo();
    }
    PurchaseService.prototype.getPurchaseData = function () {
        return this.http.get("http://" + this.connection.ip + ":" + this.connection.port + "/DasherAPI/public/api2/getCompanyPurchaseFull");
    };
    PurchaseService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PurchaseService.ctorParameters = [
        { type: Http, },
        { type: ConnectionService, },
    ];
    return PurchaseService;
}());
