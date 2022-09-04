import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Address } from 'src/app/features/customers/models/address';
import { Offer } from 'src/app/features/offers/models/offer';
import { Order } from '../../models/order';
import {
  addOrderAddress,
  addOrderOffer,
} from '../../../../shared/store/orders/orderToAdd/orderToAdd.actions';
import { SharedStoreState } from 'src/app/shared/store/shared.reducers';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order$: Observable<Order> = this.store.select((state) => state.orderToAdd);

  constructor(private store: Store<SharedStoreState>) {}
  addAddressToOrderStore(address: Address) {
    this.store.dispatch(addOrderAddress({ address }));
  }
  addOfferToOrderStore(offer: Offer[]) {
    this.store.dispatch(addOrderOffer({ offers: offer }));
  }
}
