import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PurchasePage } from '../pages/purchase/purchase';
import { PurchasesPage } from '../pages/purchases/purchases';
import { SalePage } from '../pages/sale/sale';
import { SalesPage } from '../pages/sales/sales';
import { SettingPage } from '../pages/setting/setting';
import { StaffPage } from '../pages/staff/staff';
import { StockPage } from '../pages/stock/stock';
import { StocksPage } from '../pages/stocks/stocks';
import { SalesGraph } from '../pages/sales-graph/sales-graph';
import { ConnectionService } from '../providers/connection-service';
import { SalesService } from '../providers/sales-service';
import { AllPurchaseService } from '../providers/allpurchase-service';
import { AllSalesService } from '../providers/allsales-service';
import { AllStocksService } from '../providers/allstocks-service';
import { PurchaseService } from '../providers/purchase-service';
import { StaffService } from '../providers/staff-service';
import { StocksService } from '../providers/stocks-service';

import { ChartModule } from 'ng2-chartjs2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PurchasePage,
    PurchasesPage,
    SalePage,
    SalesPage,
    SettingPage,
    StaffPage,
    StockPage,
    StocksPage,
    SalesGraph
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PurchasePage,
    PurchasesPage,
    SalePage,
    SalesPage,
    SettingPage,
    StaffPage,
    StockPage,
    StocksPage,
    SalesGraph
  ],
  providers: [ConnectionService, SalesService, AllPurchaseService, AllSalesService,
    AllStocksService, PurchaseService, StaffService, StocksService]
})
export class AppModule { }
