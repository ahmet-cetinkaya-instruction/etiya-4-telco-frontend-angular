import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/features/offers/models/offer';
import { OfferService } from 'src/app/features/offers/services/offer/offer.service';

@Component({
  selector: 'app-offer-selection',
  templateUrl: './offer-selection.component.html',
  styleUrls: ['./offer-selection.component.css'],
})
export class OfferSelectionComponent implements OnInit {
  catalogOffersList!: Offer[];
  campaignOffersList!: Offer[];
  offerList!: Offer[];
  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.getOfferList();
    this.listenBasket();
  }

  getOfferList() {
    this.offerService.getList().subscribe((data) => {
      this.catalogOffersList = data.filter(
        (offer) => offer.type.typeName === 'catalog'
      );
      this.campaignOffersList = data.filter(
        (offer) => offer.type.typeName === 'campaign'
      );
    });
  }
  addBasket(offer: Offer) {
    if (this.offerList === undefined) this.offerList = [];
    this.offerList.push(offer);
  }
  saveBasket() {
    this.offerList.forEach((offer) => {
      this.offerService.addOfferToBasketStore(offer);
    });
  }
  isSelected(offer: Offer): boolean {
    if (this.offerList === undefined) return false;
    return Boolean(
      this.offerList.find((offerInList) => offerInList.id === offer.id)
    );
  }
  getOfferCount(offer: Offer): number {
    let count: number = 0;
    this.offerList.forEach((offerInList) => {
      if (offerInList.id === offer.id) count++;
    });
    return count;
  }
  listenBasket() {
    this.offerService.basket$.subscribe((basket) => {
      this.offerList = [...basket];
      console.log(basket);
    });
  }
}
