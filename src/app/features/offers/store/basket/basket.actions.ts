import { createAction, props } from '@ngrx/store';
import { Offer } from '../../models/offer';

// Basket state'in güncellenmesine dair istekleri belirtiyoruz
export const addOfferToBasket = createAction(
  '[Basket] Add Offer To Basket',
  props<{ offer: Offer }>()
);

export const clearBasket = createAction('[Basket] Clear Basket');
