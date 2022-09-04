import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Address } from 'src/app/features/customers/models/address';
import { Order } from '../../models/order';
import { OrdersState } from '../../store/orders.reducer';
import { createOrder } from '../../store/orderToAdd/orderToAdd.actions';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order$: Observable<Order[]> = this.store.select((state) => state.order);

  constructor(private store: Store<OrdersState>) {}
  addAddressToOrderStore(address: Address) {
    this.store.dispatch(createOrder());
  }
}
