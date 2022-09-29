import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillingAccount } from '../../models/billingAccount';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  templateUrl: './customer-billing-account-detail.component.html',
  styleUrls: ['./customer-billing-account-detail.component.css'],
})
export class CustomerBillingAccountDetailComponent implements OnInit {
  selectedCustomerId!: number;
  billingAccountList!: BillingAccount[];
  constructor(
    private customerService: CustomersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomerById();
  }
  getCustomerById() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedCustomerId = params['id'];
    });
    if (this.selectedCustomerId == undefined) {
      //toast
    } else {
      this.customerService
        .getCustomerById(this.selectedCustomerId)
        .subscribe((data) => {
          this.billingAccountList = data.billingAccounts || [];
        });
    }
  }
}
