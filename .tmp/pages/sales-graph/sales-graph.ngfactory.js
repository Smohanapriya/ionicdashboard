/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './sales-graph';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '../../providers/allsales-service';
import * as import11 from 'ionic-angular/platform/platform';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from 'ionic-angular/components/toolbar/toolbar';
import * as import15 from 'ionic-angular/components/navbar/navbar';
import * as import16 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import17 from 'ionic-angular/components/content/content';
import * as import18 from 'ng2-chartjs2/components/chart';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/navigation/view-controller';
import * as import22 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import25 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/components/tabs/tabs';
import * as import29 from '../../node_modules/ng2-chartjs2/components/chart.ngfactory';
var renderType_SalesGraph_Host = null;
var _View_SalesGraph_Host0 = (function (_super) {
    __extends(_View_SalesGraph_Host0, _super);
    function _View_SalesGraph_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SalesGraph_Host0, renderType_SalesGraph_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SalesGraph_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-sales-graph', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_SalesGraph0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SalesGraph_0_4 = new import3.SalesGraph(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams), this.parentInjector.get(import10.AllSalesService), this.parentInjector.get(import11.Platform));
        this._appEl_0.initComponent(this._SalesGraph_0_4, [], compView_0);
        compView_0.create(this._SalesGraph_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_SalesGraph_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.SalesGraph) && (0 === requestNodeIndex))) {
            return this._SalesGraph_0_4;
        }
        return notFoundResult;
    };
    return _View_SalesGraph_Host0;
}(import1.AppView));
function viewFactory_SalesGraph_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SalesGraph_Host === null)) {
        (renderType_SalesGraph_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_SalesGraph_Host0(viewUtils, parentInjector, declarationEl);
}
export var SalesGraphNgFactory = new import13.ComponentFactory('page-sales-graph', viewFactory_SalesGraph_Host0, import3.SalesGraph);
var styles_SalesGraph = [];
var renderType_SalesGraph = null;
var _View_SalesGraph0 = (function (_super) {
    __extends(_View_SalesGraph0, _super);
    function _View_SalesGraph0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SalesGraph0, renderType_SalesGraph, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SalesGraph0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import14.Header(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import21.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n\n	', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_3, 'color', 'hometab');
        this._appEl_3 = new import2.AppElement(3, 1, this, this._el_3);
        var compView_3 = import22.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import15.Navbar(this.parentInjector.get(import23.App), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n		', null);
        this._el_5 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_5 = new import2.AppElement(5, 3, this, this._el_5);
        var compView_5 = import24.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ToolbarTitle_5_4 = new import16.ToolbarTitle(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import14.Toolbar, null), this._Navbar_3_4);
        this._appEl_5.initComponent(this._ToolbarTitle_5_4, [], compView_5);
        this._text_6 = this.renderer.createText(null, 'Sales (Graph)', null);
        compView_5.create(this._ToolbarTitle_5_4, [[].concat([this._text_6])], null);
        this._text_7 = this.renderer.createText(null, '\n	', null);
        compView_3.create(this._Navbar_3_4, [
            [],
            [],
            [],
            [].concat([
                this._text_4,
                this._el_5,
                this._text_7
            ])
        ], null);
        this._text_8 = this.renderer.createText(this._el_1, '\n\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'home-background');
        this.renderer.setElementAttribute(this._el_10, 'padding', '');
        this._appEl_10 = new import2.AppElement(10, null, this, this._el_10);
        var compView_10 = import25.viewFactory_Content0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Content_10_4 = new import17.Content(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import23.App), this.parentInjector.get(import26.Keyboard), this.parentInjector.get(import27.NgZone), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import28.Tabs, null));
        this._appEl_10.initComponent(this._Content_10_4, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n	', null);
        this._el_12 = this.renderer.createElement(null, 'chart', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'chart');
        this.renderer.setElementAttribute(this._el_12, 'type', 'line');
        this._appEl_12 = new import2.AppElement(12, 10, this, this._el_12);
        var compView_12 = import29.viewFactory_ChartComponent0(this.viewUtils, this.injector(12), this._appEl_12);
        this._ChartComponent_12_4 = new import18.ChartComponent(new import20.ElementRef(this._el_12));
        this._appEl_12.initComponent(this._ChartComponent_12_4, [], compView_12);
        compView_12.create(this._ChartComponent_12_4, [], null);
        this._text_13 = this.renderer.createText(null, '\n', null);
        compView_10.create(this._Content_10_4, [
            [],
            [].concat([
                this._text_11,
                this._el_12,
                this._text_13
            ]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13
        ], [], []);
        return null;
    };
    _View_SalesGraph0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarTitle_5_4;
        }
        if (((token === import15.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Navbar_3_4;
        }
        if (((token === import14.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Header_1_3;
        }
        if (((token === import18.ChartComponent) && (12 === requestNodeIndex))) {
            return this._ChartComponent_12_4;
        }
        if (((token === import17.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Content_10_4;
        }
        return notFoundResult;
    };
    _View_SalesGraph0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = 'hometab';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Navbar_3_4.color = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_10_4.ngOnInit();
        }
        var currVal_4 = this.context.labels;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._ChartComponent_12_4.labels = currVal_4;
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.data;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._ChartComponent_12_4.data = currVal_5;
            this._expr_5 = currVal_5;
        }
        var currVal_6 = 'line';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._ChartComponent_12_4.type = currVal_6;
            this._expr_6 = currVal_6;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._ChartComponent_12_4.ngOnInit();
        }
        if (!throwOnChange) {
            this._ChartComponent_12_4.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this._Navbar_3_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_3_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Content_10_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_10, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.ngAfterViewInit();
            }
        }
    };
    _View_SalesGraph0.prototype.destroyInternal = function () {
        this._ChartComponent_12_4.ngOnDestroy();
        this._Content_10_4.ngOnDestroy();
    };
    return _View_SalesGraph0;
}(import1.AppView));
export function viewFactory_SalesGraph0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SalesGraph === null)) {
        (renderType_SalesGraph = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, styles_SalesGraph, {}));
    }
    return new _View_SalesGraph0(viewUtils, parentInjector, declarationEl);
}
