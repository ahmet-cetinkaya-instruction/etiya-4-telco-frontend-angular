import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/features/offers/models/offer';
import { OfferService } from 'src/app/features/offers/services/offer/offer.service';

@Component({
  selector: 'app-offer-selection',
  templateUrl: './offer-selection.component.html',
  styleUrls: ['./offer-selection.component.css'],
})
export class OfferSelectionComponent implements OnInit {
  offers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  catalogOffersList!: Offer[];
  campaignOffersList!: Offer[];
  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.getOfferList();
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
  addBasket(offer: Offer) {}
}
