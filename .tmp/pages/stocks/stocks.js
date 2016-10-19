import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AllStocksService } from '../../providers/allstocks-service';
/*
  Generated class for the Stocks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var StocksPage = (function () {
    function StocksPage(service, loadingCtrl, navCtrl, navParams) {
        var _this = this;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stockData = [];
        this.code = navParams.get('code');
        service.getAllStocksData(this.code).subscribe(function (response) {
            JSON.parse(response._body).forEach(function (element) {
                _this.stockData.push(new StockVar(element.DATERANGE, element.CLQTY, element.CLQVALUE, element.SALVALUE, element.PROFIT, element.COMPANYCODE, getRandomElementOfEnum(ColorCode)));
            });
        });
    }
    StocksPage.prototype.presentLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        loading.present();
    };
    StocksPage.prototype.ionViewDidLoad = function () {
        this.presentLoading();
    };
    StocksPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-stocks',
                    templateUrl: 'stocks.html',
                    providers: []
                },] },
    ];
    /** @nocollapse */
    StocksPage.ctorParameters = [
        { type: AllStocksService, },
        { type: LoadingController, },
        { type: NavController, },
        { type: NavParams, },
    ];
    return StocksPage;
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
export var StockVar = (function () {
    function StockVar(_daterange, _clqty, _clqvalue, _salvalue, _profit, _companycode, _color) {
        this.daterange = _daterange;
        this.clqty = _clqty;
        this.clqvalue = _clqvalue;
        this.salvalue = _salvalue;
        this.profit = _profit;
        this.companycode = _companycode;
        this.color = _color;
    }
    return StockVar;
}());
