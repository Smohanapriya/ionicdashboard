import { NavController, LoadingController } from 'ionic-angular';
import { StocksService } from '../../providers/stocks-service';
export declare class StockPage {
    service: StocksService;
    loadingCtrl: LoadingController;
    private navController;
    companyData: Company[];
    constructor(service: StocksService, loadingCtrl: LoadingController, navController: NavController);
    presentLoading(): void;
    ionViewDidLoad(): void;
    companyClicked(event: any, item: any): void;
}
export declare class Company {
    name: any;
    inwqty: any;
    ouwqty: any;
    clqty: any;
    clqvalue: any;
    companycode: any;
    profit: any;
    color: any;
    constructor(_name: any, _inwqty: any, _ouwqty: any, _clqty: any, _profit: any, _companycode: any, _clqvalue: any, _color: any);
}
