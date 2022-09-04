import { createReducer, on } from '@ngrx/store';
import { Order } from '../../models/order';
import {
  addOrderAddress,
  addOrderOffer,
  createOrder,
} from './orderToAdd.actions';

const initialState: Order = {
  id: undefined,
  offers: [],
  address: undefined,
};

export const orderReducer = createReducer(
  initialState,
  on(createOrder, (state, action) => {
    return { ...state, ...action.order };
  }),
  on(addOrderAddress, (state, action) => {
    console.log('address: ', action);
    return { ...state, address: action.address };
  }),
  on(addOrderOffer, (state, action) => {
    console.log('action: ', action);
    return { ...state, offers: action.offers };
  })
);
