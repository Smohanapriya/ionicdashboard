import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AllSalesService } from '../../providers/allsales-service';
import { Chart } from 'ng2-chartjs2';


@Component({
  selector: 'page-sales-graph',
  templateUrl: 'sales-graph.html'
})
export class SalesGraph {
  code: any;
  labels: string[];
  data: Chart.Dataset[];
  profitData: Array<any> = [];
  saleData:Array<any> = [];
  labelData: Array<any> = [];
  constructor(public navCtrl: NavController, navParams: NavParams, service: AllSalesService, public platform: Platform) {
    this.code = navParams.get('code');
    console.log("THIS IS THE CODE RECEIEVD : " + this.code);
    service.getAllSalesData(this.code).subscribe(response => {
      JSON.parse(response._body).forEach(element => {
        this.profitData.push(element.PROFIT);
        this.labelData.push(element.SECTION);
        this.saleData.push(element.ACTSALES);
      });
    });
    this.loadGraph(this.labelData, this.profitData, this.saleData);
  }

  loadGraph(label: string[], profit: Array<any>, sale:Array<any>) {
    this.labels = label;
    this.data = [
      {
        label: 'Profit',
        data: profit,
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1
      },{
        label: 'Actual Sales',
        data: sale,
        backgroundColor: ['rgba(145, 165, 235, 0.2)'],
        borderColor: ['rgba(145, 165, 235, 1)'],
        borderWidth: 1
      }
      
    ];
  }
}
