import { Order } from '../models/order';
import { orderReducer } from './orderToAdd/orderToAdd.reducer';

export interface OrdersState {
  order: Order;
}

export const ordersReducers = {
  order: orderReducer,
};
