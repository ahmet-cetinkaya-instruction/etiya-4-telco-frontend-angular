import { Offer } from '../../offers/models/offer';
import { Address } from './address';

export interface Order {
  id: number;
  offers: Offer[];
  address:Address
}
