import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { PurchaseService } from '../../providers/purchase-service';
import { PurchasesPage } from '../purchases/purchases';

/*
  Generated class for the Purchase page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html',
  providers: [PurchaseService]
})
export class PurchasePage {
public companyData:Company[]=[];
  constructor(public service: PurchaseService,public loadingCtrl: LoadingController,private navController: NavController) {
    service.getPurchaseData().subscribe(response =>{
              JSON.parse(response._body).forEach(element => {
                this.companyData.push(
                  new Company(element.COMPANY,element.QTY,element.AMOUNT,
                  element.TAXAMOUNT,element.PROFIT,1,getRandomElementOfEnum(ColorCode))
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
    console.log("CLICKED");
    console.log(item.companycode);
    this.navController.push(PurchasesPage, {
    code: "1" //Change this to company Code once webservice is changed
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
  qty : any;
  amount:any;
  taxamount:any;
  companycode:any
  profit:any;
  color:any
  constructor(_name: any,_qty:any,_amount:any,_taxamount:any,_profit:any,_companycode:any,_color:any) {
     this.name = _name;
     this.qty = _qty;
     this.amount = _amount;
     this.taxamount = _taxamount;
     this.profit = _profit;
     this.companycode = _companycode;
     this.color = _color;
  }
}
