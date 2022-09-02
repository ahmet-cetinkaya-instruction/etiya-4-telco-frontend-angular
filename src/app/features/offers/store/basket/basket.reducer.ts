import { createReducer, on } from '@ngrx/store';
import { Offer } from '../../models/offer';
import { addOfferToBasket } from './basket.actions';

const initialState: Offer[] = [];

export const basketReducer = createReducer(
  initialState,
  on(addOfferToBasket, (state, action) => {
    return [...state, action.offer];
  })
);
