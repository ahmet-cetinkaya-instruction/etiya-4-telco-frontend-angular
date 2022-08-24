import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { StoreModule } from '@ngrx/store';
import { customersReducers } from './store/customer.reducer';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddContactMediumComponent } from './pages/add-contact-medium/add-contact-medium.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    AddContactMediumComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forRoot(customersReducers),
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomersModule { }
