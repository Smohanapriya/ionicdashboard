import { Platform, NavController, NavParams } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';
export declare class SettingPage {
    navCtrl: NavController;
    connection: any;
    mode: any;
    service: ConnectionService;
    ip: string;
    port: string;
    constructor(navCtrl: NavController, platform: Platform, service: ConnectionService, navParams: NavParams);
    ionViewDidLoad(): void;
    onSubmit(): void;
}
