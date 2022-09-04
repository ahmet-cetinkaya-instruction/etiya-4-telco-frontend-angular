import { createAction, props } from '@ngrx/store';
import { Address } from 'src/app/features/customers/models/address';
import { Offer } from 'src/app/features/offers/models/offer';
import { Order } from '../../../../features/orders/models/order';

export const createOrder = createAction(
  '[Order] Create Order',
  props<{ order: Order }>()
);

export const addOrderAddress = createAction(
  '[Order] Add Order Address',
  props<{ address: Address }>()
);

export const addOrderOffer = createAction(
  '[Order] Add Order Offer',
  props<{ offers: Offer[] }>()
);
