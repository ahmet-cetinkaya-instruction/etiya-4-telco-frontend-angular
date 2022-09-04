import { createReducer, on } from '@ngrx/store';
import { Address } from 'src/app/features/customers/models/address';
import { Order } from '../../models/order';
import { addOrderAddress, createOrder } from './orderToAdd.actions';

const initialState: Order[] = [];

export const orderReducer = createReducer(
  initialState,
  on(createOrder, (state, action) => {
    return [...state, action.order];
  }),
  on(addOrderAddress, (state, action) => {
    return [...state, action];
  })
);
