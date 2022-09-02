import { Product } from '../../customers/models/product';
import { OfferType } from '../../customers/models/type';

export interface Offer {
  id: number;
  type: OfferType;
  name: string;
  products: Product[];
}
