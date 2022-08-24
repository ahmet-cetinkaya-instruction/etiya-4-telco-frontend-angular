import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactMediumComponent } from './pages/add-contact-medium/add-contact-medium.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';

const routes: Routes = [

  {path:"customer-dashboard", component:CustomerDashboardComponent},
  {path:"contact-medium", component:AddContactMediumComponent},
  {path:"create-customer", component:CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
