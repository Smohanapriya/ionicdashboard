import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PurchaseService {

  constructor(public http: Http) {
    this.http = http;
  }
  getPurchaseData():any {
    return this.http.get("http://192.168.1.8:8080/DasherAPI/public/api2/getCompanyPurchaseFull");
  }
}
