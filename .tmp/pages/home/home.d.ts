import { Platform, NavController } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';
export declare class HomePage {
    navCtrl: NavController;
    connection: any;
    constructor(navCtrl: NavController, platform: Platform, service: ConnectionService);
    goToSale(): void;
    goToStock(): void;
    goToPurchase(): void;
    goToStaff(): void;
    goToSetting(): void;
}
