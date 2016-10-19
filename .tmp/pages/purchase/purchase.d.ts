import { NavController, LoadingController } from 'ionic-angular';
import { PurchaseService } from '../../providers/purchase-service';
export declare class PurchasePage {
    service: PurchaseService;
    loadingCtrl: LoadingController;
    private navController;
    companyData: Company[];
    constructor(service: PurchaseService, loadingCtrl: LoadingController, navController: NavController);
    presentLoading(): void;
    ionViewDidLoad(): void;
    companyClicked(event: any, item: any): void;
}
export declare class Company {
    name: any;
    qty: any;
    amount: any;
    taxamount: any;
    companycode: any;
    profit: any;
    color: any;
    constructor(_name: any, _qty: any, _amount: any, _taxamount: any, _profit: any, _companycode: any, _color: any);
}
