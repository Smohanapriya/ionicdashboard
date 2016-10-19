import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';

/*
  Generated class for the AllstocksService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AllStocksService {

connection:ConnectionService;
  constructor(public http: Http,connection:ConnectionService) {
    this.http = http;
    this.connection = connection;
    this.connection.getConnectionInfo();
  }

  getAllStocksData(code:any):any {
    return this.http.get("http://"+this.connection.ip+":"+this.connection.port+"/DasherAPI/public/api2/getCompanyStocksSegmented?company="+code);
  }
}
