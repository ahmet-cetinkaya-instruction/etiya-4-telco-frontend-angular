import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customer/customers.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  customerList!: Customer[];
  filteredCustomerList!: Customer[];
  lenght!: number;

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomersList();
  }

  getCustomersList() {
    this.customersService.getList().subscribe((response) => {
      this.customerList = response;
    });
  }

  search(event: any) {
    this.filteredCustomerList = event;
    this.lenght = this.filteredCustomerList.length;
  }

  getCustomerId(customer: Customer) {
    this.router.navigateByUrl(`/customer-info/${customer.id}`);
  }
}
