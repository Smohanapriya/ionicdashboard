import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the AllpurchaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AllPurchaseService {

  ip: string;
  port: string;
  constructor(public http: Http, platform: Platform) {
    this.http = http;
  }
  getAllPurchaseData(code: any): any {
    return this.http.get("http://192.168.1.8:8080/DasherAPI/public/api2/getCompanyPurchaseSegmented?company=" + code);
  }
}
