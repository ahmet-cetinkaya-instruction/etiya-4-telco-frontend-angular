import { createReducer, on } from '@ngrx/store';
import { Offer } from '../../models/offer';
import { addOfferToBasket, clearBasket } from './basket.actions';

// Basket state'inin başlangıç değeri
const initialState: Offer[] = [];

// Basket state'ini güncelleyen reducer
export const basketReducer = createReducer(
  initialState,
  on(addOfferToBasket, (state, action) => {
    return [...state, action.offer];
  }),
  on(clearBasket, () => {
    return [];
  })
);
