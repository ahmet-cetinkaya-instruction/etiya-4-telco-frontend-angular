import { createAction, props } from '@ngrx/store';
import { Address } from 'src/app/features/customers/models/address';
import { Order } from '../../models/order';

export const createOrder = createAction(
  '[Order] Create Order',
  props<{ order: Order }>()
);

export const addOrderAddress = createAction(
  '[Order] Add Order Address',
  props<{ address: Order }>()
);
