import { Customer } from '../models/customer';
import { customerToAddReducer } from './customerToAdd/customerToAdd.reducer';

export interface CustomerState {
  customerToAdd: Customer;
}

export const customersReducers = {
  customerToAdd: customerToAddReducer,
};
