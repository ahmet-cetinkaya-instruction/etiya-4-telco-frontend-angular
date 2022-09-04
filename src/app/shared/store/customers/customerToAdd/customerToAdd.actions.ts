import { createAction, props } from '@ngrx/store';
import { Address } from '../../../../features/customers/models/address';
import { ContactMedium } from '../../../../features/customers/models/contactMedium';
import { CustomerDemographicInfo } from '../../../../features/customers/models/customerDemographicInfo';

export const setDemographicInfo = createAction(
  '[CustomerToAdd] Set Demographic Info',
  props<CustomerDemographicInfo>()
);

export const addAddressInfo = createAction(
  '[CustomerToAdd] Add Address Info',
  props<Address>()
);

export const setContactMediumInfo = createAction(
  '[CustomerToAdd] Set ContactMedium Info',
  props<ContactMedium>()
);
