import { Offer } from '../models/offer';
import { basketReducer } from './basket/basket.reducer';

// Offers modülündeki store statelerinin ismini ve tipini tanımlıyoruz
export interface OffersState {
  basket: Offer[];
}

// Store statelerin değerlerini güncelleyen reducerları tanımlıyoruz
export const offersReducers = {
  basket: basketReducer,
};
