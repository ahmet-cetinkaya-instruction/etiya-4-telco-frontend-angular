import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-selection',
  templateUrl: './offer-selection.component.html',
  styleUrls: ['./offer-selection.component.css']
})
export class OfferSelectionComponent implements OnInit {
  offers:number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }

}
