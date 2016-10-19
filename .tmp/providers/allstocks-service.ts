import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AllstocksService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AllStocksService {

  constructor(public http: Http) {
    this.http = http;
  }

  getAllStocksData(code:any):any {
    return this.http.get("http://192.168.1.8:8080/DasherAPI/public/api2/getCompanyStocksSegmented?company="+code);
  }
}
