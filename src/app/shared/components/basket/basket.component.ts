import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  baskets:number[] = [1,2,3,4,5,6,7,8,9,10]
  constructor() { }

  ngOnInit(): void {
  }

}
