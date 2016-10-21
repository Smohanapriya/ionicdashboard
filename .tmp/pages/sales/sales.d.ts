import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AllSalesService } from '../../providers/allsales-service';
export declare class SalesPage {
    service: AllSalesService;
    loadingCtrl: LoadingController;
    navCtrl: NavController;
    private navParams;
    saleData: SaleVar[];
    code: any;
    alertCtrl: AlertController;
    constructor(alertCtrl: AlertController, service: AllSalesService, loadingCtrl: LoadingController, navCtrl: NavController, navParams: NavParams);
    presentLoading(): void;
    presentAlert(id: any): void;
    ionViewDidLoad(): void;
    goToSalesGraph(): void;
}
export declare class SaleVar {
    section: any;
    actsales: any;
    discamt: any;
    salesamt: any;
    profit: any;
    itemcategorycode: any;
    color: any;
    constructor(_section: any, _actsales: any, _discamt: any, _salesamt: any, _profit: any, _itemcategorycode: any, _color: any);
}
