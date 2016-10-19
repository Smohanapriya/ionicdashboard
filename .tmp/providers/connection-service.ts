import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectionService {
    private platform: Platform;
    public ip: string;
    public port: string;
    public error:boolean;
    public constructor(platform: Platform) {
        this.platform = platform;
    }
    public getConnectionInfo() {
        return this.platform.ready().then(() => NativeStorage.getItem('connectionStorage'))
            .then(data => {
                this.ip = data.ip;
                this.port = data.port;
                this.error = false;
                return data;
            }).catch(error => {
                this.error = true;
                return error;
            });
    }

    createConnectionInfo(ip: string, port: string) {
        NativeStorage.setItem('connectionStorage', { ip: ip, port: port })
            .then(
            () => console.log('Stored Connection Information!'),
            error => console.error('Error storing connection information', error)
            );
    }
}

