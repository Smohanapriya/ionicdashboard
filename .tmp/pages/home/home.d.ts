import { Platform, NavController, AlertController } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';
export declare class HomePage {
    navCtrl: NavController;
    private alertCtrl;
    connection: any;
    constructor(navCtrl: NavController, platform: Platform, service: ConnectionService, alertCtrl: AlertController);
    presentAlert(msg: string): void;
    goToSale(): void;
    goToStock(): void;
    goToPurchase(): void;
    goToStaff(): void;
    goToSetting(): void;
}
