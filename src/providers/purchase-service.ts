import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';

@Injectable()
export class PurchaseService {
connection:ConnectionService;
  constructor(public http: Http,connection:ConnectionService) {
    this.connection = connection;
    this.http = http;
    this.connection.getConnectionInfo();
  }
  getPurchaseData():any {
    return this.http.get("http://"+this.connection.ip+":"+this.connection.port+"/DasherAPI/public/api2/getCompanyPurchaseFull");
  }
}
