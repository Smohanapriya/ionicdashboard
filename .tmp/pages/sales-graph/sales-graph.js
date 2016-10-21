import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var SalesGraph = (function () {
    function SalesGraph(navCtrl) {
        this.navCtrl = navCtrl;
        this.labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
        this.data = [
            {
                label: '# of Votes1',
                data: [1, 9, 13, 15, 12, 13],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)'],
                borderWidth: 1
            },
            {
                label: '# of Votes2',
                data: [11, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }
        ];
    }
    SalesGraph.prototype.ionViewDidLoad = function () {
        console.log('Hello SalesGraph Page');
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
    ];
    return SalesGraph;
}());
