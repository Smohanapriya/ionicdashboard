import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { StocksService } from '../../providers/stocks-service';
import { StocksPage } from '../stocks/stocks';

/*
  Generated class for the Stock page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
  providers: [StocksService],
})
export class StockPage {
public companyData:Company[]=[];
  constructor(public service: StocksService,public loadingCtrl: LoadingController,private navController: NavController) {
    service.getStocksData().subscribe(response =>{
              JSON.parse(response._body).forEach(element => {
                this.companyData.push(
                  new Company(element.COMPANY,element.INWQTY,element.OUWQTY,
                  element.CLQTY,element.PROFIT,element.COMPANYCODE,element.CLQVALUE,getRandomElementOfEnum(ColorCode))
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
  public companyClicked (event, item): void {
    console.log(item.companycode);
    this.navController.push(StocksPage, {
    code: item.companycode
});
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

export class Company {
  name: any;
  inwqty : any;
  ouwqty:any;
  clqty:any;
  clqvalue:any;
  companycode:any;
  profit:any;
  color:any
  constructor(_name: any,_inwqty:any,_ouwqty:any,_clqty:any,_profit:any,_companycode:any,_clqvalue:any,_color:any) {
     this.name = _name;
     this.inwqty = _inwqty;
     this.ouwqty = _ouwqty;
     this.clqty = _clqty;
     this.profit = _profit;
     this.companycode = _companycode;
     this.clqvalue = _clqvalue;
     this.color = _color;
  }
}

