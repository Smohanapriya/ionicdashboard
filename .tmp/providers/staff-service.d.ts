import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class StaffService {
    http: Http;
    constructor(http: Http);
    getStaffData(): any;
}
