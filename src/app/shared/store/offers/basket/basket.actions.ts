import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/features/customers/models/product';
import { ProductConfigDto } from 'src/app/features/products/models/productConfigDto';
import { Offer } from '../../../../features/offers/models/offer';

// Basket state'in güncellenmesine dair istekleri belirtiyoruz
export const addOfferToBasket = createAction(
  '[Basket] Add Offer To Basket',
  props<{ offer: Offer }>()
);

export const clearBasket = createAction('[Basket] Clear Basket');
export const changeConfigOfProductInBasket = createAction(
  '[Basket] Change Config Of Product In Basket',
  props<{
    offer: Offer;
    product: Product;
    config: ProductConfigDto;
  }>()
);
