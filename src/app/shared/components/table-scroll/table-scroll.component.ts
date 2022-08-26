import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-scroll',
  templateUrl: './table-scroll.component.html',
  styleUrls: ['./table-scroll.component.css']
})
export class TableScrollComponent implements OnInit {
  offers:number[] = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }

}
