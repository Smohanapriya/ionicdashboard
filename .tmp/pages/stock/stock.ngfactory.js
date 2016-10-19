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
import * as import3 from './stock';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../providers/stocks-service';
import * as import9 from 'ionic-angular/components/loading/loading';
import * as import10 from 'ionic-angular/navigation/nav-controller';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from 'ionic-angular/components/toolbar/toolbar';
import * as import14 from 'ionic-angular/components/navbar/navbar';
import * as import15 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import16 from 'ionic-angular/components/content/content';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from 'ionic-angular/config/config';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import22 from 'ionic-angular/components/app/app';
import * as import23 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import30 from 'ionic-angular/components/card/card';
import * as import31 from 'ionic-angular/components/grid/grid';
import * as import32 from 'ionic-angular/components/icon/icon';
var renderType_StockPage_Host = null;
var _View_StockPage_Host0 = (function (_super) {
    __extends(_View_StockPage_Host0, _super);
    function _View_StockPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_StockPage_Host0, renderType_StockPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_StockPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-stock', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_StockPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._StockPage_0_4 = new import3.StockPage(this.parentInjector.get(import8.StocksService), this.parentInjector.get(import9.LoadingController), this.parentInjector.get(import10.NavController));
        this._appEl_0.initComponent(this._StockPage_0_4, [], compView_0);
        compView_0.create(this._StockPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_StockPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.StockPage) && (0 === requestNodeIndex))) {
            return this._StockPage_0_4;
        }
        return notFoundResult;
    };
    return _View_StockPage_Host0;
}(import1.AppView));
function viewFactory_StockPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_StockPage_Host === null)) {
        (renderType_StockPage_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_StockPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var StockPageNgFactory = new import12.ComponentFactory('page-stock', viewFactory_StockPage_Host0, import3.StockPage);
var styles_StockPage = [];
var renderType_StockPage = null;
var _View_StockPage0 = (function (_super) {
    __extends(_View_StockPage0, _super);
    function _View_StockPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_StockPage0, renderType_StockPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_StockPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import13.Header(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import20.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_3, 'color', 'hometab');
        this._appEl_3 = new import2.AppElement(3, 1, this, this._el_3);
        var compView_3 = import21.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import14.Navbar(this.parentInjector.get(import22.App), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import10.NavController, null), this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_5 = new import2.AppElement(5, 3, this, this._el_5);
        var compView_5 = import23.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ToolbarTitle_5_4 = new import15.ToolbarTitle(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import13.Toolbar, null), this._Navbar_3_4);
        this._appEl_5.initComponent(this._ToolbarTitle_5_4, [], compView_5);
        this._text_6 = this.renderer.createText(null, 'Company (Stock)', null);
        compView_5.create(this._ToolbarTitle_5_4, [[].concat([this._text_6])], null);
        this._text_7 = this.renderer.createText(null, '\n  ', null);
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
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'home-background');
        this.renderer.setElementAttribute(this._el_10, 'padding', '');
        this._appEl_10 = new import2.AppElement(10, null, this, this._el_10);
        var compView_10 = import24.viewFactory_Content0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Content_10_4 = new import16.Content(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import22.App), this.parentInjector.get(import25.Keyboard), this.parentInjector.get(import26.NgZone), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import27.Tabs, null));
        this._appEl_10.initComponent(this._Content_10_4, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_12 = new import2.AppElement(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import28.TemplateRef_(this._appEl_12, viewFactory_StockPage1);
        this._NgFor_12_6 = new import17.NgFor(this._appEl_12.vcRef, this._TemplateRef_12_5, this.parentInjector.get(import29.IterableDiffers), this.ref);
        this._text_13 = this.renderer.createText(null, '\n\n', null);
        compView_10.create(this._Content_10_4, [
            [],
            [].concat([
                this._text_11,
                this._appEl_12,
                this._text_13
            ]),
            []
        ], null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
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
            this._anchor_12,
            this._text_13,
            this._text_14
        ], [], []);
        return null;
    };
    _View_StockPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarTitle_5_4;
        }
        if (((token === import14.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Navbar_3_4;
        }
        if (((token === import13.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Header_1_3;
        }
        if (((token === import28.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import17.NgFor) && (12 === requestNodeIndex))) {
            return this._NgFor_12_6;
        }
        if (((token === import16.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Content_10_4;
        }
        return notFoundResult;
    };
    _View_StockPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_0 = 'hometab';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Navbar_3_4.color = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_10_4.ngOnInit();
        }
        changes = null;
        var currVal_4 = this.context.companyData;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgFor_12_6.ngForOf = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgFor_12_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_12_6.ngDoCheck();
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
    _View_StockPage0.prototype.destroyInternal = function () {
        this._Content_10_4.ngOnDestroy();
    };
    return _View_StockPage0;
}(import1.AppView));
export function viewFactory_StockPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_StockPage === null)) {
        (renderType_StockPage = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_StockPage, {}));
    }
    return new _View_StockPage0(viewUtils, parentInjector, declarationEl);
}
var _View_StockPage1 = (function (_super) {
    __extends(_View_StockPage1, _super);
    function _View_StockPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_StockPage1, renderType_StockPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_StockPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-card', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'card-round');
        this._Card_0_3 = new import30.Card(this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-card-header', null);
        this._CardHeader_2_3 = new import30.CardHeader();
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'ion-card-content', null);
        this._CardContent_8_3 = new import30.CardContent();
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'ion-grid', null);
        this._Grid_10_3 = new import31.Grid();
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'ion-row', null);
        this._Row_12_3 = new import31.Row();
        this._text_13 = this.renderer.createText(this._el_12, '\n          ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_14, 'width-50', '');
        this._Col_14_3 = new import31.Col();
        this._text_15 = this.renderer.createText(this._el_14, '\n            ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'h2', null);
        this._text_17 = this.renderer.createText(this._el_16, 'Inward QTY', null);
        this._text_18 = this.renderer.createText(this._el_14, '\n            ', null);
        this._el_19 = this.renderer.createElement(this._el_14, 'span', null);
        this._el_20 = this.renderer.createElement(this._el_19, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'card-titler');
        this.renderer.setElementAttribute(this._el_20, 'name', 'pie');
        this.renderer.setElementAttribute(this._el_20, 'role', 'img');
        this._Icon_20_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_20), this.renderer);
        this._text_21 = this.renderer.createText(this._el_20, '', null);
        this._text_22 = this.renderer.createText(this._el_14, '\n          ', null);
        this._text_23 = this.renderer.createText(this._el_12, '\n          ', null);
        this._el_24 = this.renderer.createElement(this._el_12, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_24, 'width-50', '');
        this._Col_24_3 = new import31.Col();
        this._text_25 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_26 = this.renderer.createElement(this._el_24, 'h2', null);
        this._text_27 = this.renderer.createText(this._el_26, 'Outward QTY', null);
        this._text_28 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_29 = this.renderer.createElement(this._el_24, 'span', null);
        this._el_30 = this.renderer.createElement(this._el_29, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_30, 'class', 'card-titler');
        this.renderer.setElementAttribute(this._el_30, 'name', 'podium');
        this.renderer.setElementAttribute(this._el_30, 'role', 'img');
        this._Icon_30_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_30), this.renderer);
        this._text_31 = this.renderer.createText(this._el_30, '', null);
        this._text_32 = this.renderer.createText(this._el_24, '\n          ', null);
        this._text_33 = this.renderer.createText(this._el_12, '\n        ', null);
        this._text_34 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_35 = this.renderer.createElement(this._el_10, 'ion-row', null);
        this._Row_35_3 = new import31.Row();
        this._text_36 = this.renderer.createText(this._el_35, '\n          ', null);
        this._el_37 = this.renderer.createElement(this._el_35, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_37, 'width-50', '');
        this._Col_37_3 = new import31.Col();
        this._text_38 = this.renderer.createText(this._el_37, '\n            ', null);
        this._el_39 = this.renderer.createElement(this._el_37, 'h2', null);
        this._text_40 = this.renderer.createText(this._el_39, 'Closing QTY', null);
        this._text_41 = this.renderer.createText(this._el_37, '\n            ', null);
        this._el_42 = this.renderer.createElement(this._el_37, 'span', null);
        this._el_43 = this.renderer.createElement(this._el_42, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_43, 'class', 'card-titler');
        this.renderer.setElementAttribute(this._el_43, 'name', 'stats');
        this.renderer.setElementAttribute(this._el_43, 'role', 'img');
        this._Icon_43_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_43), this.renderer);
        this._text_44 = this.renderer.createText(this._el_43, '', null);
        this._text_45 = this.renderer.createText(this._el_37, '\n          ', null);
        this._text_46 = this.renderer.createText(this._el_35, '\n          ', null);
        this._el_47 = this.renderer.createElement(this._el_35, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_47, 'width-50', '');
        this._Col_47_3 = new import31.Col();
        this._text_48 = this.renderer.createText(this._el_47, '\n            ', null);
        this._el_49 = this.renderer.createElement(this._el_47, 'h2', null);
        this._text_50 = this.renderer.createText(this._el_49, 'Profit', null);
        this._text_51 = this.renderer.createText(this._el_47, '\n            ', null);
        this._el_52 = this.renderer.createElement(this._el_47, 'span', null);
        this._el_53 = this.renderer.createElement(this._el_52, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_53, 'class', 'card-titler');
        this.renderer.setElementAttribute(this._el_53, 'name', 'ribbon');
        this.renderer.setElementAttribute(this._el_53, 'role', 'img');
        this._Icon_53_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_53), this.renderer);
        this._text_54 = this.renderer.createText(this._el_53, '', null);
        this._text_55 = this.renderer.createText(this._el_47, '\n          ', null);
        this._text_56 = this.renderer.createText(this._el_35, '\n        ', null);
        this._text_57 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_58 = this.renderer.createElement(this._el_10, 'ion-row', null);
        this._Row_58_3 = new import31.Row();
        this._text_59 = this.renderer.createText(this._el_58, '\n          ', null);
        this._el_60 = this.renderer.createElement(this._el_58, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_60, 'width-100', '');
        this._Col_60_3 = new import31.Col();
        this._text_61 = this.renderer.createText(this._el_60, '\n            ', null);
        this._el_62 = this.renderer.createElement(this._el_60, 'h2', null);
        this._text_63 = this.renderer.createText(this._el_62, 'Closing QTY value', null);
        this._text_64 = this.renderer.createText(this._el_60, '\n            ', null);
        this._el_65 = this.renderer.createElement(this._el_60, 'span', null);
        this._el_66 = this.renderer.createElement(this._el_65, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_66, 'class', 'card-titler');
        this.renderer.setElementAttribute(this._el_66, 'name', 'ribbon');
        this.renderer.setElementAttribute(this._el_66, 'role', 'img');
        this._Icon_66_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config), new import19.ElementRef(this._el_66), this.renderer);
        this._text_67 = this.renderer.createText(this._el_66, '', null);
        this._text_68 = this.renderer.createText(this._el_60, '\n          ', null);
        this._text_69 = this.renderer.createText(this._el_58, '\n        ', null);
        this._text_70 = this.renderer.createText(this._el_10, '\n      ', null);
        this._text_71 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_72 = this.renderer.createText(this._el_0, '\n    \n', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._text_64,
            this._el_65,
            this._el_66,
            this._text_67,
            this._text_68,
            this._text_69,
            this._text_70,
            this._text_71,
            this._text_72
        ], [disposable_0], []);
        return null;
    };
    _View_StockPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.CardHeader) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._CardHeader_2_3;
        }
        if (((token === import32.Icon) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Icon_20_3;
        }
        if (((token === import31.Col) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._Col_14_3;
        }
        if (((token === import32.Icon) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._Icon_30_3;
        }
        if (((token === import31.Col) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Col_24_3;
        }
        if (((token === import31.Row) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Row_12_3;
        }
        if (((token === import32.Icon) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._Icon_43_3;
        }
        if (((token === import31.Col) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Col_37_3;
        }
        if (((token === import32.Icon) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._Icon_53_3;
        }
        if (((token === import31.Col) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._Col_47_3;
        }
        if (((token === import31.Row) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Row_35_3;
        }
        if (((token === import32.Icon) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._Icon_66_3;
        }
        if (((token === import31.Col) && ((60 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._Col_60_3;
        }
        if (((token === import31.Row) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 69)))) {
            return this._Row_58_3;
        }
        if (((token === import31.Grid) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._Grid_10_3;
        }
        if (((token === import30.CardContent) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 71)))) {
            return this._CardContent_8_3;
        }
        if (((token === import30.Card) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
            return this._Card_0_3;
        }
        return notFoundResult;
    };
    _View_StockPage1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3 = 'pie';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Icon_20_3.name = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_6 = 'podium';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Icon_30_3.name = currVal_6;
            this._expr_6 = currVal_6;
        }
        var currVal_9 = 'stats';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._Icon_43_3.name = currVal_9;
            this._expr_9 = currVal_9;
        }
        var currVal_12 = 'ribbon';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._Icon_53_3.name = currVal_12;
            this._expr_12 = currVal_12;
        }
        var currVal_15 = 'ribbon';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._Icon_66_3.name = currVal_15;
            this._expr_15 = currVal_15;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, 'card-tab-bg-', this.context.$implicit.color, ' font-bold');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'className', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_5, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = this._Icon_20_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_20, 'hide', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = import4.interpolate(1, ' ', this.context.$implicit.inwqty, '');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_21, currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._Icon_30_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_30, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = import4.interpolate(1, ' ', this.context.$implicit.ouwqty, '');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_31, currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_10 = this._Icon_43_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_43, 'hide', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = import4.interpolate(1, ' ', this.context.$implicit.clqty, '');
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_44, currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_13 = this._Icon_53_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_53, 'hide', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = import4.interpolate(1, ' ', this.context.$implicit.profit, '%');
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setText(this._text_54, currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_16 = this._Icon_66_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_66, 'hide', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = import4.interpolate(1, ' ', this.context.$implicit.clqvalue, '');
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setText(this._text_67, currVal_17);
            this._expr_17 = currVal_17;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_StockPage1.prototype.destroyInternal = function () {
        this._Icon_20_3.ngOnDestroy();
        this._Icon_30_3.ngOnDestroy();
        this._Icon_43_3.ngOnDestroy();
        this._Icon_53_3.ngOnDestroy();
        this._Icon_66_3.ngOnDestroy();
    };
    _View_StockPage1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.companyClicked($event, this.context.$implicit) !== false);
        return (true && pd_0);
    };
    return _View_StockPage1;
}(import1.AppView));
function viewFactory_StockPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_StockPage1(viewUtils, parentInjector, declarationEl);
}
