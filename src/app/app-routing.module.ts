import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './features/customers/pages/customer-dashboard/customer-dashboard.component';
import { ShowcaseComponent } from './shared/pages/showcase/showcase.component';

const routes: Routes = [
  {path:'showcase',component:ShowcaseComponent},

  {
    path: 'dashboard',
    children: [
      {path: '', component: CustomerDashboardComponent, pathMatch: 'full'},
      {
        path: 'customers',
        loadChildren: () =>
          import('./features/customers/customers-routing.module').then(
            m => m.CustomersRoutingModule
          ),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
