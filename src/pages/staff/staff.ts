import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import {StaffService} from '../../providers/staff-service';

/*
  Generated class for the Staff page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
  providers:[]
})
export class StaffPage {
public staffData:Staff[]=[];
  constructor(public navCtrl: NavController, public service: StaffService,public loadingCtrl: LoadingController) {
    service.getStaffData().subscribe(response =>{
              JSON.parse(response._body).forEach(element => {
                this.staffData.push(
                  new Staff(element.EMPLOYEE,element.ACTSALES,element.DISCAMT,
                  element.SALESAMT,element.PROFIT,element.SALESMAN1CODE,element.SHORTNAME,getRandomElementOfEnum(ColorCode))
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


export class Staff {
  name: any;
  actsales : any;
  discamt:any;
  salesamt:any;
  profit:any;
  salesman1code:any;
  shortname:any;
  color:any
  constructor(_name: any,_actsales:any,_discamt:any,_salesamt:any,_profit:any,_salesman1code:any,_shortname:any,_color:any) {
     this.name = _name;
     this.actsales = _actsales;
     this.discamt = _discamt;
     this.salesamt = _salesamt;
     this.profit = _profit;
     this.salesman1code = _salesman1code;
     this.shortname = _shortname;
     this.color = _color;
  }
}
