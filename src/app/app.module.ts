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
import { ConnectionService } from '../providers/connection-service';
import { SalesService } from '../providers/sales-service';

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
    StocksPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    StocksPage
  ],
  providers: []
})
export class AppModule {}
