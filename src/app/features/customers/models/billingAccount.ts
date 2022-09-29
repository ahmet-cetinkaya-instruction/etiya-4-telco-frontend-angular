import { Address } from './address';
import { Order } from '../../orders/models/order';

export interface BillingAccount {
  id: number;
  accountNumber: string;
  accountName: string;
  description: string;
  status: string;
  addresses: Address[];
  orders: Order[];
}
