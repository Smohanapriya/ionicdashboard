import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class AllStocksService {
    http: Http;
    constructor(http: Http);
    getAllStocksData(code: any): any;
}
