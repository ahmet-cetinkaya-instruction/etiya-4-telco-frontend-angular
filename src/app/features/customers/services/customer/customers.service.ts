import { setDemographicInfo } from './../../store/customerToAdd/customerToAdd.actions';
import { Customer } from './../../models/customer';
import { map, Observable, Subject } from 'rxjs';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchCustomer } from '../../models/searchCustomer';
import { Store } from '@ngrx/store';
import { CustomerState } from '../../store/customer.reducer';
import { CustomerDemographicInfo } from '../../models/customerDemographicInfo';
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customerToAddModel$: Observable<Customer> = this.store.select(
    state => state.customerToAdd
  );

  apiControllerUrl: string = `${environment.apiUrl}/customers`;

  constructor(
    private httpClient: HttpClient,
    private store: Store<CustomerState>
  ) {}

  getList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiControllerUrl);
  }

  getListByFilter(searchCustomer: SearchCustomer): Observable<Customer[]> {
    const subject = new Subject<Customer[]>();
    this.httpClient.get<Customer[]>(this.apiControllerUrl).subscribe({
      next: response => {
        let filteredCustomers = response;
        if (searchCustomer.id) {
          filteredCustomers = filteredCustomers.filter(
            item => item.id == searchCustomer.id
          );
        }
        if (searchCustomer.customerId) {
          filteredCustomers = filteredCustomers.filter(
            item => item.customerId == searchCustomer.customerId
          );
        }
        if (searchCustomer.accountNumber) {
          filteredCustomers = filteredCustomers.filter(item =>
            item.billingAccounts!.find(
              ba => ba.accountNumber == searchCustomer.accountNumber
            )
          );
        }

        if (searchCustomer.gsmNumber) {
          filteredCustomers = filteredCustomers.filter(
            item => item.contactMedium!.mobilePhone == searchCustomer.gsmNumber
          );
        }

        if (searchCustomer.firstName) {
          filteredCustomers = filteredCustomers.filter(item =>
            item
              .firstName!.toLowerCase()
              .includes(searchCustomer.firstName.toLowerCase())
          );
        }
        if (searchCustomer.lastname) {
          filteredCustomers = filteredCustomers.filter(item =>
            item
              .lastName!.toLowerCase()
              .includes(searchCustomer.lastname.toLowerCase())
          );
        }
        if (searchCustomer.orderNumber) {
          filteredCustomers = filteredCustomers.filter(item =>
            item.billingAccounts!.find(ba =>
              ba.orders.find(o => o.id == searchCustomer.orderNumber)
            )
          );
        }
        subject.next(filteredCustomers);
      },
      error: err => {
        subject.error(err);
      },
      complete: () => {
        //en son calısan yer
        subject.complete();
      },
    });
    return subject.asObservable();
  }

  setDemographicInfo(props: CustomerDemographicInfo) {
    this.store.dispatch(setDemographicInfo(props));
  }
}
