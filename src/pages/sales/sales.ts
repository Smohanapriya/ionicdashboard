import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AllSalesService } from '../../providers/allsales-service';
import { SalesGraph } from '../sales-graph/sales-graph'
/*
  Generated class for the Sales page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html',
  providers: []
})
export class SalesPage {
  public saleData: SaleVar[] = [];
  code: any;
  alertCtrl: AlertController;
  constructor(alertCtrl: AlertController, public service: AllSalesService, public loadingCtrl: LoadingController, public navCtrl: NavController, private navParams: NavParams) {
    this.code = navParams.get('code');

    this.alertCtrl = alertCtrl;

    service.getAllSalesData(this.code).subscribe(response => {
      JSON.parse(response._body).forEach(element => {
        this.saleData.push(
          new SaleVar(element.SECTION, element.ACTSALES, element.DISCAMT,
            element.SALESAMT, element.PROFIT, element.ITEMCATEGORYCODE8, getRandomElementOfEnum(ColorCode))
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

  presentAlert(id: any) {
    let alert = this.alertCtrl.create({
      title: 'ID',
      subTitle: 'CODE:' + id,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  ionViewDidLoad() {
    this.presentLoading();
  }
  goToSalesGraph() {
    this.navCtrl.push(SalesGraph);
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

function getRandomElementOfEnum(e: Enum): string {
  let length = Object.keys(e).length / 2;
  return e[Math.floor((Math.random() * length))];
}


export class SaleVar {
  section: any;
  actsales: any;
  discamt: any;
  salesamt: any;
  profit: any;
  itemcategorycode: any;
  color: any;
  constructor(_section: any, _actsales: any, _discamt: any, _salesamt: any, _profit: any, _itemcategorycode: any, _color: any) {
    this.section = _section;
    this.actsales = _actsales;
    this.discamt = _discamt;
    this.salesamt = _salesamt;
    this.profit = _profit;
    this.itemcategorycode = _itemcategorycode;
    this.color = _color;
  }
}

