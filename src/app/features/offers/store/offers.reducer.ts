import { Offer } from '../models/offer';
import { basketReducer } from './basket/basket.reducer';

export interface OffersState {
  basket: Offer[];
}
export const offersReducers = {
  basket: basketReducer,
};
