import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { StoreModule } from '@ngrx/store';
import { offersReducers } from './store/offers.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OffersRoutingModule,
    StoreModule.forRoot(offersReducers),
  ],
})
export class OffersModule {}
