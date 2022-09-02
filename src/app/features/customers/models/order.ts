import { Offer } from '../../offers/models/offer';

export interface Order {
  id: number;
  offers: Offer[];
}
