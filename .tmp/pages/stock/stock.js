import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { StocksService } from '../../providers/stocks-service';
import { StocksPage } from '../stocks/stocks';
/*
  Generated class for the Stock page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var StockPage = (function () {
    function StockPage(service, loadingCtrl, navController) {
        var _this = this;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navController = navController;
        this.companyData = [];
        service.getStocksData().subscribe(function (response) {
            JSON.parse(response._body).forEach(function (element) {
                _this.companyData.push(new Company(element.COMPANY, element.INWQTY, element.OUWQTY, element.CLQTY, element.PROFIT, element.COMPANYCODE, element.CLQVALUE, getRandomElementOfEnum(ColorCode)));
            });
        });
    }
    StockPage.prototype.presentLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        loading.present();
    };
    StockPage.prototype.ionViewDidLoad = function () {
        this.presentLoading();
    };
    StockPage.prototype.companyClicked = function (event, item) {
        console.log(item.companycode);
        this.navController.push(StocksPage, {
            code: item.companycode
        });
    };
    StockPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-stock',
                    templateUrl: 'stock.html',
                    providers: [StocksService],
                },] },
    ];
    /** @nocollapse */
    StockPage.ctorParameters = [
        { type: StocksService, },
        { type: LoadingController, },
        { type: NavController, },
    ];
    return StockPage;
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
export var Company = (function () {
    function Company(_name, _inwqty, _ouwqty, _clqty, _profit, _companycode, _clqvalue, _color) {
        this.name = _name;
        this.inwqty = _inwqty;
        this.ouwqty = _ouwqty;
        this.clqty = _clqty;
        this.profit = _profit;
        this.companycode = _companycode;
        this.clqvalue = _clqvalue;
        this.color = _color;
    }
    return Company;
}());
