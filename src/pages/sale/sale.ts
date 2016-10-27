import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SalesService } from '../../providers/sales-service';
import { SalesPage } from '../sales/sales';
/*
  Generated class for the Sale page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sale',
  templateUrl: 'sale.html',
  providers: []
})
export class SalePage {
  public companyData: Company[] = [];
  constructor(public service: SalesService, public loadingCtrl: LoadingController, private navController: NavController) {
    service.getSalesData().subscribe(response => {
      JSON.parse(response._body).forEach(element => {
        this.companyData.push(
          new Company(element.COMPANY, element.ACTSALES, element.DISCAMT,
            element.SALESAMT, element.PROFIT, element.COMPANYCODE, element.SHORTNAME, getRandomColor(ColorCode))
        );
      });
    });
  }
  presentLoading() {
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    loading.present();
  }
  ionViewDidLoad() {
    this.presentLoading();
  }
  public companyClicked(event, item): void {
    this.navController.push(SalesPage, {
      code: item.companycode
    });
  }

}

enum ColorCode {
  red, pink, purple, deeppurple, indigo, blue
  , lightblue, teal, cyan, green, lightgreen
  , lime, yellow, amber, orange, deeporange, brown
  , grey, bluegrey
}

interface Enum {
  [id: number]: string
}

function getRandomColor(e: Enum): string {
  let length = Object.keys(e).length / 2;
  return e[Math.floor((Math.random() * length))];
}


export class Company {
  name: any;
  actsales: any;
  discamt: any;
  salesamt: any;
  profit: any;
  companycode: any;
  shortname: any;
  color: any
  constructor(_name: any, _actsales: any, _discamt: any, _salesamt: any, _profit: any, _companycode: any, _shortname: any, _color: any) {
    this.name = _name;
    this.actsales = _actsales;
    this.discamt = _discamt;
    this.salesamt = _salesamt;
    this.profit = _profit;
    this.companycode = _companycode;
    this.shortname = _shortname;
    this.color = _color;
  }
}
