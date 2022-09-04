import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './features/customers/customers.module';
import { PanelModule } from './features/panel/panel.module';
import { CityModule } from './features/city/city.module';
import { OffersModule } from './features/offers/offers.module';
import { CampaignsModule } from './features/campaigns/campaigns.module';
import { CatalogsModule } from './features/catalogs/catalogs.module';
import { ProductsModule } from './features/products/products.module';
import { OrdersModule } from './features/orders/orders.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    CustomersModule,
    PanelModule,
    CityModule,
    OffersModule,
    CampaignsModule,
    CatalogsModule,
    ProductsModule,
    OrdersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
