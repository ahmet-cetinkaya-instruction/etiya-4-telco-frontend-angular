import { Address } from './address';
import { BillingAccount } from './billingAccount';
import { ContactMedium } from './contactMedium';

export interface Customer {
  id?: number;
  customerId?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  birthDate?: string;
  gender?: string;
  nationalityId?: number;
  role?: string;
  motherName?: string;
  fatherName?: string;
  addresses?: Address[];
  contactMedium?: ContactMedium;
  billingAccounts?: BillingAccount[];
}
