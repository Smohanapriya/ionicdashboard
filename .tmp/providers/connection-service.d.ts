import { Platform, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
export declare class ConnectionService {
    private navCtrl;
    private platform;
    ip: string;
    port: string;
    error: boolean;
    constructor(platform: Platform, navCtrl: NavController);
    getConnectionInfo(): Promise<any>;
    createConnectionInfo(ip: string, port: string): void;
}
