import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController } from 'ionic-angular';
import {AllStocksService} from '../../providers/allstocks-service';

/*
  Generated class for the Stocks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stocks',
  templateUrl: 'stocks.html',
  providers: []
})
export class StocksPage {
public stockData:StockVar[]=[];
code:any;
    constructor(public service: AllStocksService,public loadingCtrl: LoadingController,public navCtrl: NavController,private navParams: NavParams) {
    this.code = navParams.get('code');
    service.getAllStocksData(this.code).subscribe(response =>{
              JSON.parse(response._body).forEach(element => {
                this.stockData.push(
                  new StockVar(element.DATERANGE,element.CLQTY,element.CLQVALUE,
                  element.SALVALUE,element.PROFIT,element.COMPANYCODE,getRandomElementOfEnum(ColorCode))
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

export class StockVar {
  daterange: any;
  clqty : any;
  clqvalue :any;
  salvalue  :any;
  profit:any;
  companycode:any;
  color:any;
  constructor(_daterange: any,_clqty:any,_clqvalue:any,_salvalue:any,_profit:any,_companycode:any,_color:any) {
     this.daterange = _daterange;
     this.clqty = _clqty;
     this.clqvalue = _clqvalue;
     this.salvalue = _salvalue;
     this.profit = _profit;
     this.companycode = _companycode;
     this.color=_color;
  }
}

