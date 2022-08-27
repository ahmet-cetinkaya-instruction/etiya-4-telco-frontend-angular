import { createReducer, on } from '@ngrx/store';
import { Address } from '../../models/address';
import { Customer } from '../../models/customer';
import {
  addAddressInfo,
  setContactMediumInfo,
  setDemographicInfo,
} from './customerToAdd.actions';

const initialState: Customer = {
  id: undefined,
  customerId: undefined,
  firstName: undefined,
  middleName: undefined,
  lastName: undefined,
  birthDate: undefined,
  gender: undefined,
  nationalityId: undefined,
  role: undefined,
  motherName: undefined,
  fatherName: undefined,
  addresses: [],
  contactMedium: undefined,
  billingAccounts: [],
};

export const customerToAddReducer = createReducer(
  initialState,
  on(setDemographicInfo, (state, action) => {
    return { ...state, ...action };
  }),
  on(addAddressInfo, (state, action) => {
    const newState: Customer = {
      ...state,
      addresses: [...(state.addresses as Address[]), action],
    };
    console.log('newstate:', newState);
    return newState;
  }),
  on(setContactMediumInfo, (state, action) => {
    console.log('state:', state);
    console.log('action:', action);
    const newState: Customer = { ...state, contactMedium: action };
    console.log('newstate:', newState);
    return newState;
  })
);
