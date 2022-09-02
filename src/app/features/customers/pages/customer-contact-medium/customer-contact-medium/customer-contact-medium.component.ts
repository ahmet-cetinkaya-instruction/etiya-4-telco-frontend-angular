import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Customer } from '../../../models/customer';
import { CustomersService } from '../../../services/customer/customers.service';

@Component({
  templateUrl: './customer-contact-medium.component.html',
  styleUrls: ['./customer-contact-medium.component.css'],
})
export class CustomerContactMediumComponent implements OnInit {
  selectedCustomerId!: number;
  updateCustomerContactForm!: FormGroup;
  customer!: Customer;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.createFormUpdateContactCustomer();
    this.getCustomerById();
  }

  createFormUpdateContactCustomer() {
    this.updateCustomerContactForm = this.formBuilder.group({
      email: ['', Validators.required],
      homePhone: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      faxNumber: ['', Validators.required],
    });
  }
  getCustomerById() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedCustomerId = params['id'];
      console.log(this.selectedCustomerId);
    });
    if (this.selectedCustomerId == undefined) {
      this.messageService.add({
        detail: 'Customer not found!...',
        severity: 'danger',
        summary: 'error',
        key: 'etiya-custom',
      });
    } else {
      this.customersService
        .getCustomerById(this.selectedCustomerId)
        .subscribe((data) => {
          this.customer = data;
        });
    }
  }
}
