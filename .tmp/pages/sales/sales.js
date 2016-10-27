import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AllSalesService } from '../../providers/allsales-service';
import { SalesGraph } from '../sales-graph/sales-graph';
/*
  Generated class for the Sales page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SalesPage = (function () {
    function SalesPage(service, loadingCtrl, navCtrl, navParams) {
        var _this = this;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.saleData = [];
        this.code = navParams.get('code');
        service.getAllSalesData(this.code).subscribe(function (response) {
            JSON.parse(response._body).forEach(function (element) {
                _this.saleData.push(new SaleVar(element.SECTION, element.ACTSALES, element.DISCAMT, element.SALESAMT, element.PROFIT, element.ITEMCATEGORYCODE8, getRandomElementOfEnum(ColorCode)));
            });
        });
    }
    SalesPage.prototype.presentLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        loading.present();
    };
    SalesPage.prototype.ionViewDidLoad = function () {
        this.presentLoading();
    };
    SalesPage.prototype.goToSalesGraph = function () {
        this.navCtrl.push(SalesGraph, {
            code: this.code
        });
    };
    SalesPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-sales',
                    templateUrl: 'sales.html',
                    providers: []
                },] },
    ];
    /** @nocollapse */
    SalesPage.ctorParameters = [
        { type: AllSalesService, },
        { type: LoadingController, },
        { type: NavController, },
        { type: NavParams, },
    ];
    return SalesPage;
}());
var ColorCode;
(function (ColorCode) {
    ColorCode[ColorCode["red"] = 0] = "red";
    ColorCode[ColorCode["pink"] = 1] = "pink";
    ColorCode[ColorCode["purple"] = 2] = "purple";
    ColorCode[ColorCode["deeppurple"] = 3] = "deeppurple";
    ColorCode[ColorCode["indigo"] = 4] = "indigo";
    ColorCode[ColorCode["blue"] = 5] = "blue";
    ColorCode[ColorCode["lightblue"] = 6] = "lightblue";
    ColorCode[ColorCode["teal"] = 7] = "teal";
    ColorCode[ColorCode["cyan"] = 8] = "cyan";
    ColorCode[ColorCode["green"] = 9] = "green";
    ColorCode[ColorCode["lightgreen"] = 10] = "lightgreen";
    ColorCode[ColorCode["lime"] = 11] = "lime";
    ColorCode[ColorCode["yellow"] = 12] = "yellow";
    ColorCode[ColorCode["amber"] = 13] = "amber";
    ColorCode[ColorCode["orange"] = 14] = "orange";
    ColorCode[ColorCode["deeporange"] = 15] = "deeporange";
    ColorCode[ColorCode["brown"] = 16] = "brown";
    ColorCode[ColorCode["grey"] = 17] = "grey";
    ColorCode[ColorCode["bluegrey"] = 18] = "bluegrey";
})(ColorCode || (ColorCode = {}));
function getRandomElementOfEnum(e) {
    var length = Object.keys(e).length / 2;
    return e[Math.floor((Math.random() * length))];
}
export var SaleVar = (function () {
    function SaleVar(_section, _actsales, _discamt, _salesamt, _profit, _itemcategorycode, _color) {
        this.section = _section;
        this.actsales = _actsales;
        this.discamt = _discamt;
        this.salesamt = _salesamt;
        this.profit = _profit;
        this.itemcategorycode = _itemcategorycode;
        this.color = _color;
    }
    return SaleVar;
}());
