import { createAction, props } from '@ngrx/store';
import { Offer } from '../../models/offer';

export const addOfferToBasket = createAction(
  '[Basket] Add Offer To Basket',
  props<{ offer: Offer }>()
);
