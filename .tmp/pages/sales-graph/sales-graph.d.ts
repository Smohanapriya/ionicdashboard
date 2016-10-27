import { NavController, NavParams, Platform } from 'ionic-angular';
import { AllSalesService } from '../../providers/allsales-service';
import { Chart } from 'ng2-chartjs2';
export declare class SalesGraph {
    navCtrl: NavController;
    platform: Platform;
    code: any;
    labels: string[];
    data: Chart.Dataset[];
    profitData: Array<any>;
    saleData: Array<any>;
    labelData: Array<any>;
    constructor(navCtrl: NavController, navParams: NavParams, service: AllSalesService, platform: Platform);
    loadGraph(label: string[], profit: Array<any>, sale: Array<any>): void;
}
