import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PurchaseService } from '../../providers/purchase-service';
import { PurchasesPage } from '../purchases/purchases';
/*
  Generated class for the Purchase page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var PurchasePage = (function () {
    function PurchasePage(service, loadingCtrl, navController) {
        var _this = this;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navController = navController;
        this.companyData = [];
        service.getPurchaseData().subscribe(function (response) {
            JSON.parse(response._body).forEach(function (element) {
                _this.companyData.push(new Company(element.COMPANY, element.QTY, element.AMOUNT, element.TAXAMOUNT, element.PROFIT, 1, getRandomElementOfEnum(ColorCode)));
            });
        });
    }
    PurchasePage.prototype.presentLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        loading.present();
    };
    PurchasePage.prototype.ionViewDidLoad = function () {
        this.presentLoading();
    };
    PurchasePage.prototype.companyClicked = function (event, item) {
        console.log("CLICKED");
        console.log(item.companycode);
        this.navController.push(PurchasesPage, {
            code: "1" //Change this to company Code once webservice is changed
        });
    };
    PurchasePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-purchase',
                    templateUrl: 'purchase.html',
                    providers: []
                },] },
    ];
    /** @nocollapse */
    PurchasePage.ctorParameters = [
        { type: PurchaseService, },
        { type: LoadingController, },
        { type: NavController, },
    ];
    return PurchasePage;
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
    function Company(_name, _qty, _amount, _taxamount, _profit, _companycode, _color) {
        this.name = _name;
        this.qty = _qty;
        this.amount = _amount;
        this.taxamount = _taxamount;
        this.profit = _profit;
        this.companycode = _companycode;
        this.color = _color;
    }
    return Company;
}());
