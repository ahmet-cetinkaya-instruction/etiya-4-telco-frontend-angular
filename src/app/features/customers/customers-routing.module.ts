import { CustomerInfoComponent } from './pages/customer-info/customer-info.component';
import { CustomerAddressComponent } from './pages/customer-address/customer-address.component';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactMediumComponent } from './pages/add-contact-medium/add-contact-medium.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { AddAddressInfoComponent } from './pages/add-address-info/add-address-info.component';
import { ListAddressInfoComponent } from './pages/list-address-info/list-address-info.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { CustomerBillingAccountComponent } from './pages/customer-billing-account/customer-billing-account/customer-billing-account.component';
import { CustomerBillingAccountDetailComponent } from './pages/customer-billing-account-detail/customer-billing-account-detail.component';
import { UpdateCustContactMediumComponent } from './pages/update-cust-contact-medium/update-cust-contact-medium/update-cust-contact-medium.component';

import { SubmitOrderComponent } from './pages/submit-order/submit-order.component';
import { CustomerContactMediumComponent } from './pages/customer-contact-medium/customer-contact-medium/customer-contact-medium.component';
import { OfferSelectionComponent } from './pages/offer-selection/offer-selection.component';
import { ConfigurationProductComponent } from './pages/configuration-product/configuration-product.component';
import { AddCustomerAddressComponent } from './pages/add-customer-address/add-customer-address.component';

const routes: Routes = [
  // dashboard/customers/:id/address/update/:addressId
  { path: 'customer-info/:id', component: CustomerInfoComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: 'contact-medium', component: AddContactMediumComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'add-address-info', component: AddAddressInfoComponent },
  { path: 'list-address-info', component: ListAddressInfoComponent },
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
  { path: 'customer-address/:id', component: CustomerAddressComponent },
  { path: 'customer-bill/:id', component: CustomerBillingAccountComponent },
  {
    path: 'customer-contact-form/:id',
    component: UpdateCustContactMediumComponent,
  },
  {
    path: 'customer-billing-account-detail/:id',
    component: CustomerBillingAccountDetailComponent,
  },
  { path: ':id/submit-order/:billingAccountId', component: SubmitOrderComponent },
  {
    path: 'customer-contact-medium/:id',
    component: CustomerContactMediumComponent,
  },
  {
    path: ':id/offer-selection/:billingAccountId',
    component: OfferSelectionComponent,
  },
  { path: ':id/configuration-product/:billingAccountId', component: ConfigurationProductComponent },
  { path: ':id/address/add', component: AddCustomerAddressComponent },
  {
    path: ':id/address/update/:addressId',
    component: AddCustomerAddressComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
