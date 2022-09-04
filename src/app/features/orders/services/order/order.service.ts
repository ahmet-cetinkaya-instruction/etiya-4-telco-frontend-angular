import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Address } from 'src/app/features/customers/models/address';
import { Offer } from 'src/app/features/offers/models/offer';
import { Order } from '../../models/order';
import { OrdersState } from '../../store/orders.reducer';
import {
  addOrderAddress,
  addOrderOffer,
} from '../../store/orderToAdd/orderToAdd.actions';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order$: Observable<Order> = this.store.select((state) => state.order);

  constructor(private store: Store<OrdersState>) {}
  addAddressToOrderStore(address: Address) {
    this.store.dispatch(addOrderAddress({ address }));
  }
  addOfferToOrderStore(offer: Offer[]) {
    this.store.dispatch(addOrderOffer({ offers: offer }));
  }
}
