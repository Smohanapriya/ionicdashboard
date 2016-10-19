import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
export declare class AllPurchaseService {
    http: Http;
    ip: string;
    port: string;
    constructor(http: Http, platform: Platform);
    getAllPurchaseData(code: any): any;
}
