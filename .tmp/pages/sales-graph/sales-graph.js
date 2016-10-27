import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AllSalesService } from '../../providers/allsales-service';
export var SalesGraph = (function () {
    function SalesGraph(navCtrl, navParams, service, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.profitData = [];
        this.saleData = [];
        this.labelData = [];
        this.code = navParams.get('code');
        console.log("THIS IS THE CODE RECEIEVD : " + this.code);
        service.getAllSalesData(this.code).subscribe(function (response) {
            JSON.parse(response._body).forEach(function (element) {
                _this.profitData.push(element.PROFIT);
                _this.labelData.push(element.SECTION);
                _this.saleData.push(element.ACTSALES);
            });
        });
        this.loadGraph(this.labelData, this.profitData, this.saleData);
    }
    SalesGraph.prototype.loadGraph = function (label, profit, sale) {
        this.labels = label;
        this.data = [
            {
                label: 'Profit',
                data: profit,
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }, {
                label: 'Actual Sales',
                data: sale,
                backgroundColor: ['rgba(145, 165, 235, 0.2)'],
                borderColor: ['rgba(145, 165, 235, 1)'],
                borderWidth: 1
            }
        ];
    };
    SalesGraph.decorators = [
        { type: Component, args: [{
                    selector: 'page-sales-graph',
                    templateUrl: 'sales-graph.html'
                },] },
    ];
    /** @nocollapse */
    SalesGraph.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: AllSalesService, },
        { type: Platform, },
    ];
    return SalesGraph;
}());
