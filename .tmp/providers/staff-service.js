import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the StaffService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var StaffService = (function () {
    function StaffService(http) {
        this.http = http;
        this.http = http;
    }
    StaffService.prototype.getStaffData = function () {
        return this.http.get("http://192.168.1.8:8080/DasherAPI/public/api2/getCompanyEmployees");
    };
    StaffService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StaffService.ctorParameters = [
        { type: Http, },
    ];
    return StaffService;
}());
