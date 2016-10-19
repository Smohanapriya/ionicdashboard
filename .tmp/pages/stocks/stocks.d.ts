import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AllStocksService } from '../../providers/allstocks-service';
export declare class StocksPage {
    service: AllStocksService;
    loadingCtrl: LoadingController;
    navCtrl: NavController;
    private navParams;
    stockData: StockVar[];
    code: any;
    constructor(service: AllStocksService, loadingCtrl: LoadingController, navCtrl: NavController, navParams: NavParams);
    presentLoading(): void;
    ionViewDidLoad(): void;
}
export declare class StockVar {
    daterange: any;
    clqty: any;
    clqvalue: any;
    salvalue: any;
    profit: any;
    companycode: any;
    color: any;
    constructor(_daterange: any, _clqty: any, _clqvalue: any, _salvalue: any, _profit: any, _companycode: any, _color: any);
}
