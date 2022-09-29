import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Address } from 'src/app/features/customers/models/address';
import { Offer } from 'src/app/features/offers/models/offer';
import { Order } from '../../models/order';
import {
  addOrderAddress,
  addOrderOffer,
  createOrder,
} from '../../../../shared/store/orders/orderToAdd/orderToAdd.actions';
import { SharedStoreState } from 'src/app/shared/store/shared.reducers';
import { Customer } from 'src/app/features/customers/models/customer';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiControllerUrl: string = `${environment.apiUrl}/customers`;

  order$: Observable<Order> = this.store.select((state) => state.orderToAdd);

  constructor(
    private store: Store<SharedStoreState>,
    private httpClient: HttpClient
  ) {}

  addAddressToOrderStore(address: Address) {
    this.store.dispatch(addOrderAddress({ address }));
  }
  addOfferToOrderStore(offer: Offer[]) {
    this.store.dispatch(addOrderOffer({ offers: offer }));
  }
  createOrderOnStore(order: Order) {
    this.store.dispatch(createOrder({ order }));
  }

  addOrder(
    order: Order,
    customer: Customer,
    billingAccountId: number
  ): Observable<Customer> | null {
    const newCustomer: Customer = {
      ...customer,
    };
    newCustomer.billingAccounts
      ?.find((account) => account.id == billingAccountId)
      ?.orders.push({
        ...order,
        id: Math.floor(10000000 + Math.random() * 90000000),
      });
    return this.httpClient.put<Customer>(
      `${this.apiControllerUrl}/${customer.id}`,
      newCustomer
    );
  }
}
