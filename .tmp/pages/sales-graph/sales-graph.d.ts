import { NavController } from 'ionic-angular';
import { Chart } from 'ng2-chartjs2';
export declare class SalesGraph {
    navCtrl: NavController;
    constructor(navCtrl: NavController);
    labels: string[];
    data: Chart.Dataset[];
    ionViewDidLoad(): void;
}
