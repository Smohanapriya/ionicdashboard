import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';
export declare class AllPurchaseService {
    http: Http;
    ip: string;
    port: string;
    connection: ConnectionService;
    constructor(http: Http, connection: ConnectionService);
    getAllPurchaseData(code: any): any;
}
