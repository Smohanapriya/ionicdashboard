import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';

/*
  Generated class for the AllsalesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AllSalesService {
connection:ConnectionService;
  constructor(public http: Http,connection:ConnectionService) {
    this.http = http;
    this.connection = connection;
    this.connection.getConnectionInfo();
  }
  getAllSalesData(code:any):any {
    return this.http.get("http://"+this.connection.ip+":"+this.connection.port+"/DasherAPI/public/api2/getCompanySalesSegmented?company="+code);
  }
}
