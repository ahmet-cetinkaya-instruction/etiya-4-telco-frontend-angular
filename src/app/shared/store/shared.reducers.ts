import { Customer } from 'src/app/features/customers/models/customer';
import { Offer } from 'src/app/features/offers/models/offer';
import { Order } from 'src/app/features/orders/models/order';
import { customerToAddReducer } from 'src/app/shared/store/customers/customerToAdd/customerToAdd.reducer';
import { basketReducer } from './offers/basket/basket.reducer';
import { orderToAddReducer } from './orders/orderToAdd/orderToAdd.reducer';

// Shared modülündeki store statelerinin ismini ve tipini tanımlıyoruz
export interface SharedStoreState {
  customerToAdd: Customer;
  orderToAdd: Order;
  basket: Offer[];
}

// Store statelerin değerlerini güncelleyen reducerları tanımlıyoruz
export const sharedReducers = {
  customerToAdd: customerToAddReducer,
  orderToAdd: orderToAddReducer,
  basket: basketReducer,
};
