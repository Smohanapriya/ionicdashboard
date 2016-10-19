import { NavController, LoadingController } from 'ionic-angular';
import { StaffService } from '../../providers/staff-service';
export declare class StaffPage {
    navCtrl: NavController;
    service: StaffService;
    loadingCtrl: LoadingController;
    staffData: Staff[];
    constructor(navCtrl: NavController, service: StaffService, loadingCtrl: LoadingController);
    presentLoading(): void;
    ionViewDidLoad(): void;
}
export declare class Staff {
    name: any;
    actsales: any;
    discamt: any;
    salesamt: any;
    profit: any;
    salesman1code: any;
    shortname: any;
    color: any;
    constructor(_name: any, _actsales: any, _discamt: any, _salesamt: any, _profit: any, _salesman1code: any, _shortname: any, _color: any);
}
