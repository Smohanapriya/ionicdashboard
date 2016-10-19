import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';
export var SalesService = (function () {
    function SalesService(http, connection) {
        this.http = http;
        this.connection = connection;
        this.http = http;
        this.connection.getConnectionInfo();
    }
    SalesService.prototype.getSalesData = function () {
        return this.http.get("http://" + this.connection.ip + ":" + this.connection.port + "/DasherAPI/public/api2/getCompanySalesFull");
    };
    SalesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SalesService.ctorParameters = [
        { type: Http, },
        { type: ConnectionService, decorators: [{ type: Inject, args: [ConnectionService,] },] },
    ];
    return SalesService;
}());
