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
import { CustomerBillingAccountComponent } from '../../pages/customer-billing-account/customer-billing-account/customer-billing-account.component';
import { BillingAccount } from '../../models/billingAccount';
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
      addresses: customer.addresses?.map((item, index) => ({...item, id:index+1})),
      role: "individual",
      customerId: 9999
    }
    return this.httpClient.post<Customer>(this.apiControllerUrl, newCustomer);
  }

  delete(id:number):Observable<Customer>{
    return this.httpClient.delete<Customer>(`${this.apiControllerUrl}/${id}`)
  }

  update(customerDemographicInfo:any, customer:Customer):Observable<Customer>{
    const newCustomer:Customer = {
      ...customer,
      firstName:customerDemographicInfo.firstName,
      middleName:customerDemographicInfo.middleName,
      lastName:customerDemographicInfo.lastName,
      birthDate:customerDemographicInfo.birthDate,
      gender:customerDemographicInfo.gender,
      nationalityId:customerDemographicInfo.nationalityId,
      motherName:customerDemographicInfo.motherName,
      fatherName:customerDemographicInfo.fatherName
    }
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`,newCustomer)
  }

  addAddress(address:Address, customer:Customer):Observable<Customer>{    
    const newCustomer:Customer = {
      ...customer,
      addresses: [...customer.addresses || [], {...address, id: (customer.addresses?.length || 0) + 1}]
    }
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`,newCustomer)
  }

  updateAddress(addressToUpdate:Address, customer:Customer):Observable<Customer>{    
    const newCustomer:Customer = {
      ...customer,
    }
    const addressIndex = customer.addresses?.findIndex(address => address.id === addressToUpdate.id) as number;
    newCustomer.addresses![addressIndex] = addressToUpdate;

    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`, newCustomer)
  }

  updateContactMedium(contactToUpdate:ContactMedium, customer:Customer):Observable<Customer>{
    const newCustomer:Customer = {
      ...customer,
      contactMedium: contactToUpdate
    }
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`, newCustomer)
  }

  addBillingAccount(billingAccount:BillingAccount, customer:Customer):Observable<Customer>{
    const newCustomer:Customer = {
      ...customer,      
      billingAccounts: [...customer.billingAccounts || [], {...billingAccount, id: (customer.billingAccounts?.length || 0) + 1}]
    }
    console.log(newCustomer);
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`,newCustomer)
  }
}
