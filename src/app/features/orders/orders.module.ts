import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { StoreModule } from '@ngrx/store';
import { ordersReducers } from './store/orders.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    StoreModule.forRoot(ordersReducers),
  ],
})
export class OrdersModule {}
