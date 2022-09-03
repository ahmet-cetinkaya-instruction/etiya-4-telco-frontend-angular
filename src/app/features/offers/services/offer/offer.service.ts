import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/features/customers/models/product';
import { ProductConfigDto } from 'src/app/features/products/models/productConfigDto';
import { environment } from 'src/environments/environment';
import { Offer } from '../../models/offer';
import {
  addOfferToBasket,
  changeConfigOfProductInBasket,
  clearBasket,
} from '../../store/basket/basket.actions';
import { OffersState } from '../../store/offers.reducer';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  apiControllerUrl: string = `${environment.apiUrl}/offers`;
  basket$: Observable<Offer[]> = this.store.select((state) => state.basket);

  constructor(
    private httpClient: HttpClient,
    private store: Store<OffersState>
  ) {}

  getList(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(this.apiControllerUrl);
  }

  addOfferToBasketStore(offer: Offer) {
    this.store.dispatch(addOfferToBasket({ offer }));
  }
  clearBasketInStore() {
    this.store.dispatch(clearBasket());
  }

  changeConfigOfProductInBasketInStore(
    offer: Offer,
    product: Product,
    config: ProductConfigDto
  ) {
    this.store.dispatch(changeConfigOfProductInBasket({offer, product, config}));
  }
}
