import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AllPurchaseService } from '../../providers/allpurchase-service';
export declare class PurchasesPage {
    service: AllPurchaseService;
    loadingCtrl: LoadingController;
    navCtrl: NavController;
    private navParams;
    purchaseData: PurchaseVar[];
    code: any;
    constructor(service: AllPurchaseService, loadingCtrl: LoadingController, navCtrl: NavController, navParams: NavParams);
    presentLoading(): void;
    ionViewDidLoad(): void;
}
export declare class PurchaseVar {
    supplier: any;
    qty: any;
    amount: any;
    taxamount: any;
    profit: any;
    stockqty: any;
    stockvalue: any;
    color: any;
    constructor(_supplier: any, _qty: any, _amount: any, _taxamount: any, _profit: any, _stockqty: any, _stockvalue: any, _color: any);
}
