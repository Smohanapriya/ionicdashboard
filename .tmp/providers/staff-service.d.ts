import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';
export declare class StaffService {
    http: Http;
    connection: ConnectionService;
    constructor(http: Http, connection: ConnectionService);
    getStaffData(): any;
}
