import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class PurchaseService {
    http: Http;
    constructor(http: Http);
    getPurchaseData(): any;
}
