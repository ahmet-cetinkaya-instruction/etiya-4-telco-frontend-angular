import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {
  updateCustomerForm!: FormGroup;
  selectedCustomerId!: number;
  customer!: Customer;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomersService
  ) {}

  ngOnInit(): void {
    this.getCustomerById();
  }

  createFormUpdateCustomer() {
    this.updateCustomerForm = this.formBuilder.group({
      firstName: [this.customer.firstName, Validators.required],
      middleName: [this.customer.middleName, Validators.required],
      lastName: [this.customer.lastName, Validators.required],
      birthDate: [this.customer.birthDate, Validators.required],
      gender: [this.customer.gender, Validators.required],
      fatherName: [this.customer.fatherName, Validators.required],
      motherName: [this.customer.motherName, Validators.required],
      nationalityId: [this.customer.nationalityId, Validators.required],
    });
  }

  getCustomerById() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['customerId']) this.selectedCustomerId = params['customerId'];
    });
    if (this.selectedCustomerId == undefined) {
      //toast
    } else {
      this.customerService
        .getCustomerById(this.selectedCustomerId)
        .subscribe((data) => {
          data.forEach((data) => {
            this.customer=data
            this.createFormUpdateCustomer();
          });
        });
    }
  }
}
