import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/features/offers/models/offer';
import { OfferService } from 'src/app/features/offers/services/offer/offer.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  basket!: Offer[];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.getBasket();
  }
  getBasket() {
    this.offerService.basket$.subscribe((data) => {
      this.basket = data;
    });
  }
  get amount(): number {
    let sumAmount: number = 0;
    this.basket.forEach((offer) => {
      sumAmount += offer.products.reduce(
        (beforeAmount, product) => beforeAmount + product.amount,
        0
      );
    });
    return sumAmount;
  }
  clear() {
    this.offerService.clearBasketInStore();
  }
}
