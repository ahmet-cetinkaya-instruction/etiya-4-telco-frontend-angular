import { addAddressInfo, setContactMediumInfo, setDemographicInfo } from './../../store/customerToAdd/customerToAdd.actions';
import { Customer } from './../../models/customer';
import { map, Observable, Subject } from 'rxjs';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchCustomer } from '../../models/searchCustomer';
import { Store } from '@ngrx/store';
import { CustomerState } from '../../store/customer.reducer';
import { CustomerDemographicInfo } from '../../models/customerDemographicInfo';
import { Address } from '../../models/address';
import { ContactMedium } from '../../models/contactMedium';
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

  setDemographicInfoToStore(props: CustomerDemographicInfo) {
    this.store.dispatch(setDemographicInfo(props));
  }

  addAddressInfoToStore(props: Address) {
    this.store.dispatch(addAddressInfo(props));
  }

  setContactMediumInfoToStore(props: ContactMedium) {
    this.store.dispatch(setContactMediumInfo(props));
  }

  getCustomerById(selectedId:number):Observable<Customer>{
    const subject = new Subject<Customer>();  //backend simülasyonu
    this.httpClient.get<Customer[]>(this.apiControllerUrl+("?id=")+selectedId).subscribe({
      next:(response) => {
        const customer: Customer = response[0]
        subject.next(customer);
      },
      error:(err) =>{
        subject.error(err);
      },
      complete:() =>{
        subject.complete();
      }      
    })
    return subject.asObservable()
  }

  add(customer:Customer):Observable<Customer> {
    const newCustomer:Customer = {
      ...customer,
      role: "individual",
      customerId: 9999
    }
    return this.httpClient.post<Customer>(this.apiControllerUrl, newCustomer);
  }

  delete(id:number):Observable<Customer>{
    return this.httpClient.delete<Customer>(`${this.apiControllerUrl}/${id}`)
  }

  update(customer:Customer):Observable<Customer>{
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`,customer)
  }

  addAddress(address:any,customer:Customer):Observable<Customer>{
    const newCustomer:Customer = {
      ...customer,
      addresses: [customer.addresses, address]
    }
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`,newCustomer)
  }



}
