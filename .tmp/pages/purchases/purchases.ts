import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController } from 'ionic-angular';
import {AllPurchaseService} from '../../providers/allpurchase-service';

/*
  Generated class for the Purchases page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-purchases',
  templateUrl: 'purchases.html',
  providers: []
})
export class PurchasesPage {

public purchaseData:PurchaseVar[]=[];
code:any;
  constructor(public service: AllPurchaseService,public loadingCtrl: LoadingController,public navCtrl: NavController,private navParams: NavParams) {
    this.code = navParams.get('code');
    service.getAllPurchaseData(this.code).subscribe(response =>{
              JSON.parse(response._body).forEach(element => {
                this.purchaseData.push(
                  new PurchaseVar(element.SUPPLIER,element.QTY,element.AMOUNT,
                  element.TAXAMOUNT,element.PROFIT,element.STOCKQTY,element.STOCKVALUE,getRandomElementOfEnum(ColorCode))
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

}
enum ColorCode {
    red, pink, purple,deeppurple,indigo,blue
    ,lightblue,teal,cyan,green,lightgreen
    ,lime,yellow,amber,orange,deeporange,brown
    ,grey,bluegrey
}

interface Enum {
    [id: number]: string
}

function getRandomElementOfEnum(e: Enum): string {
   let length = Object.keys(e).length / 2;
   return e[Math.floor((Math.random() * length))];
}
export class PurchaseVar {
  supplier: any;
  qty : any;
  amount:any;
  taxamount:any;
  profit:any;
  stockqty:any;
  stockvalue:any;
  color:any;
  constructor(_supplier: any,_qty:any,_amount:any,_taxamount:any,_profit:any,_stockqty:any,_stockvalue:any,_color:any) {
     this.supplier = _supplier;
     this.qty = _qty;
     this.amount = _amount;
     this.taxamount = _taxamount;
     this.profit = _profit;
     this.stockqty = _stockqty;
     this.stockvalue = _stockvalue;
     this.color=_color;
  }
}