import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-address-info',
  templateUrl: './list-address-info.component.html',
  styleUrls: ['./list-address-info.component.css']
})
export class ListAddressInfoComponent implements OnInit {
  offers:number[] = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }

}
