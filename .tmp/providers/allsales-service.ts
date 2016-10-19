import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AllsalesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AllSalesService {

  constructor(public http: Http) {
    this.http = http;
  }
  getAllSalesData(code:any):any {
    return this.http.get("http://192.168.1.8:8080/DasherAPI/public/api2/getCompanySalesSegmented?company="+code);
  }
}
