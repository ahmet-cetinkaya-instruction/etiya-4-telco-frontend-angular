import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  selector: 'app-list-address-info',
  templateUrl: './list-address-info.component.html',
  styleUrls: ['./list-address-info.component.css'],
})
export class ListAddressInfoComponent implements OnInit {
  customer!: Customer;
  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.customersService.customerToAddModel$.subscribe((state) => {
      this.customer = state;
    });
  }
}
