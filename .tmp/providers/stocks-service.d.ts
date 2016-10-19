import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class StocksService {
    http: Http;
    constructor(http: Http);
    getStocksData(): any;
}
