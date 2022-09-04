import { Offer } from '../../offers/models/offer';
import { Address } from '../../customers/models/address';

export interface Order {
  id: number;
  offers: Offer[];
  address: Address[];
}
