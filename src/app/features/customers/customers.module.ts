import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { StoreModule } from '@ngrx/store';
import { customersReducers } from './store/customer.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forRoot(customersReducers)
  ]
})
export class CustomersModule { }
