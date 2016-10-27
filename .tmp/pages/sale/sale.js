import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SalesService } from '../../providers/sales-service';
import { SalesPage } from '../sales/sales';
/*
  Generated class for the Sale page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SalePage = (function () {
    function SalePage(service, loadingCtrl, navController) {
        var _this = this;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navController = navController;
        this.companyData = [];
        service.getSalesData().subscribe(function (response) {
            JSON.parse(response._body).forEach(function (element) {
                _this.companyData.push(new Company(element.COMPANY, element.ACTSALES, element.DISCAMT, element.SALESAMT, element.PROFIT, element.COMPANYCODE, element.SHORTNAME, getRandomColor(ColorCode)));
            });
        });
    }
    SalePage.prototype.presentLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        loading.present();
    };
    SalePage.prototype.ionViewDidLoad = function () {
        this.presentLoading();
    };
    SalePage.prototype.companyClicked = function (event, item) {
        this.navController.push(SalesPage, {
            code: item.companycode
        });
    };
    SalePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-sale',
                    templateUrl: 'sale.html',
                    providers: []
                },] },
    ];
    /** @nocollapse */
    SalePage.ctorParameters = [
        { type: SalesService, },
        { type: LoadingController, },
        { type: NavController, },
    ];
    return SalePage;
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
function getRandomColor(e) {
    var length = Object.keys(e).length / 2;
    return e[Math.floor((Math.random() * length))];
}
export var Company = (function () {
    function Company(_name, _actsales, _discamt, _salesamt, _profit, _companycode, _shortname, _color) {
        this.name = _name;
        this.actsales = _actsales;
        this.discamt = _discamt;
        this.salesamt = _salesamt;
        this.profit = _profit;
        this.companycode = _companycode;
        this.shortname = _shortname;
        this.color = _color;
    }
    return Company;
}());
