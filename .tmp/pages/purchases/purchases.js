import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AllPurchaseService } from '../../providers/allpurchase-service';
/*
  Generated class for the Purchases page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var PurchasesPage = (function () {
    function PurchasesPage(service, loadingCtrl, navCtrl, navParams) {
        var _this = this;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.purchaseData = [];
        this.code = navParams.get('code');
        service.getAllPurchaseData(this.code).subscribe(function (response) {
            JSON.parse(response._body).forEach(function (element) {
                _this.purchaseData.push(new PurchaseVar(element.SUPPLIER, element.QTY, element.AMOUNT, element.TAXAMOUNT, element.PROFIT, element.STOCKQTY, element.STOCKVALUE, getRandomElementOfEnum(ColorCode)));
            });
        });
    }
    PurchasesPage.prototype.presentLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        loading.present();
    };
    PurchasesPage.prototype.ionViewDidLoad = function () {
        this.presentLoading();
    };
    PurchasesPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-purchases',
                    templateUrl: 'purchases.html',
                    providers: []
                },] },
    ];
    /** @nocollapse */
    PurchasesPage.ctorParameters = [
        { type: AllPurchaseService, },
        { type: LoadingController, },
        { type: NavController, },
        { type: NavParams, },
    ];
    return PurchasesPage;
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
export var PurchaseVar = (function () {
    function PurchaseVar(_supplier, _qty, _amount, _taxamount, _profit, _stockqty, _stockvalue, _color) {
        this.supplier = _supplier;
        this.qty = _qty;
        this.amount = _amount;
        this.taxamount = _taxamount;
        this.profit = _profit;
        this.stockqty = _stockqty;
        this.stockvalue = _stockvalue;
        this.color = _color;
    }
    return PurchaseVar;
}());
