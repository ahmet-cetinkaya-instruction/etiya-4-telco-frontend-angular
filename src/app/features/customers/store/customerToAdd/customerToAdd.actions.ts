import { createAction, props } from "@ngrx/store";
import { Address } from "../../models/address";
import { ContactMedium } from "../../models/contactMedium";
import { CustomerDemographicInfo } from "../../models/customerDemographicInfo";

export const setDemographicInfo = createAction(
    '[CustomerToAdd] Set Demographic Info',
    props<CustomerDemographicInfo>()
)

export const addAddressInfo = createAction(
    '[CustomerToAdd] Add Address Info',
    props<Address>()
)

export const setContactMediumInfo = createAction(
    '[CustomerToAdd] Set ContactMedium Info',
    props<ContactMedium>()
)