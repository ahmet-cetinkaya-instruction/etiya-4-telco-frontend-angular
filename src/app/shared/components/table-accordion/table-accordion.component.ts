import { Product } from './../../../features/customers/models/product';
import { Component, Input, OnInit } from '@angular/core';
import { BillingAccount } from 'src/app/features/customers/models/billingAccount';

@Component({
  selector: 'app-table-accordion',
  templateUrl: './table-accordion.component.html',
  styleUrls: ['./table-accordion.component.css']
})
export class TableAccordionComponent implements OnInit {

  @Input() billingAccountList!: BillingAccount[];
  @Input() productList!: Product[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.billingAccountList)
    console.log(this.productList)

  }

}
