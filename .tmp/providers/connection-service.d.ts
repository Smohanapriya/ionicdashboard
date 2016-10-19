import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
export declare class ConnectionService {
    private platform;
    ip: string;
    port: string;
    error: boolean;
    constructor(platform: Platform);
    getConnectionInfo(): Promise<any>;
    createConnectionInfo(ip: string, port: string): void;
}
