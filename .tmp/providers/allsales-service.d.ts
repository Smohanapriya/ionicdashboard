import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class AllSalesService {
    http: Http;
    constructor(http: Http);
    getAllSalesData(code: any): any;
}
