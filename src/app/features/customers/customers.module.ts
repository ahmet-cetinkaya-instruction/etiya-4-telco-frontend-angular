import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { StoreModule } from '@ngrx/store';
import { customersReducers } from './store/customer.reducer';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddContactMediumComponent } from './pages/add-contact-medium/add-contact-medium.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { AddAddressInfoComponent } from './pages/add-address-info/add-address-info.component';
import { ListAddressInfoComponent } from './pages/list-address-info/list-address-info.component';
import { CustomerAddressComponent } from './pages/customer-address/customer-address.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { CustomerBillingAccountComponent } from './pages/customer-billing-account/customer-billing-account/customer-billing-account.component';
import { CustomerBillingAccountDetailComponent } from './pages/customer-billing-account-detail/customer-billing-account-detail.component';
import { CustomerInfoComponent } from './pages/customer-info/customer-info.component';
import { UpdateCustContactMediumComponent } from './pages/update-cust-contact-medium/update-cust-contact-medium/update-cust-contact-medium.component';
import { ConfigurationProductComponent } from './pages/configuration-product/configuration-product.component';
import { SubmitOrderComponent } from './pages/submit-order/submit-order.component';
import { CustomerContactMediumComponent } from './pages/customer-contact-medium/customer-contact-medium/customer-contact-medium.component';
import { OfferSelectionComponent } from './pages/offer-selection/offer-selection.component';
import { AddCustomerAddressComponent } from './pages/add-customer-address/add-customer-address.component';
import { CityModule } from '../city/city.module';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    AddContactMediumComponent,
    CreateCustomerComponent,
    AddAddressInfoComponent,
    ListAddressInfoComponent,
    CustomerAddressComponent,
    UpdateCustomerComponent,
    CustomerBillingAccountComponent,
    CustomerBillingAccountDetailComponent,
    CustomerInfoComponent,
    UpdateCustContactMediumComponent,
    ConfigurationProductComponent,
    SubmitOrderComponent,
    CustomerContactMediumComponent,
    OfferSelectionComponent,
    AddCustomerAddressComponent


  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forRoot(customersReducers),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CityModule
  ]
})
export class CustomersModule { }
