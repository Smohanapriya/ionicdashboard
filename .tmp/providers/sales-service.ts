import { Injectable, Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';

@Injectable()
export class SalesService {
  connection:ConnectionService;
  constructor(public http: Http, @Inject(ConnectionService) connection:ConnectionService) {
    this.connection = connection;
    this.http = http;
    this.connection.getConnectionInfo();
  }

  getSalesData(): any {
    return this.http.get("http://"+this.connection.ip+":"+this.connection.port+"/DasherAPI/public/api2/getCompanySalesFull");
  }
}
