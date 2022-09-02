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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
