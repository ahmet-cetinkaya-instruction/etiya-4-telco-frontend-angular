import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { StoreModule } from '@ngrx/store';
import { customersReducers } from './store/customer.reducer';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerDashboardComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forRoot(customersReducers),
    SharedModule
  ]
})
export class CustomersModule { }
