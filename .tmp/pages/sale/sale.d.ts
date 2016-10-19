import { NavController, LoadingController } from 'ionic-angular';
import { SalesService } from '../../providers/sales-service';
export declare class SalePage {
    service: SalesService;
    loadingCtrl: LoadingController;
    private navController;
    companyData: Company[];
    constructor(service: SalesService, loadingCtrl: LoadingController, navController: NavController);
    presentLoading(): void;
    ionViewDidLoad(): void;
    companyClicked(event: any, item: any): void;
}
export declare class Company {
    name: any;
    actsales: any;
    discamt: any;
    salesamt: any;
    profit: any;
    companycode: any;
    shortname: any;
    color: any;
    constructor(_name: any, _actsales: any, _discamt: any, _salesamt: any, _profit: any, _companycode: any, _shortname: any, _color: any);
}
