import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

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
    private customerService: CustomersService,
    private router:Router,
    private messageService:MessageService
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
      if (params['id']) this.selectedCustomerId = params['id'];
    });
    if (this.selectedCustomerId == undefined) {
      //toast
    } else {
      this.customerService
        .getCustomerById(this.selectedCustomerId)
        .subscribe((data) => {          
            this.customer=data
            this.createFormUpdateCustomer();          
        });
    }
  }

  update() {
    if (this.updateCustomerForm.invalid) {
      this.messageService.add({detail:'Please fill required areas'
      ,severity:'danger',summary:'Error',key:'etiya-custom'}) 
      return;
    }
    const customer:Customer = Object.assign({id:this.customer.id}, this.updateCustomerForm.value); 
      this.customerService.update(customer).subscribe(() => {
        setTimeout(() => {
          this.router.navigateByUrl(`/dashboard/customers/customer-address/${customer.id}`);
          this.messageService.add({detail:'Sucsessfully updated'
        ,severity:'success',summary:'Update',key:'etiya-custom'})  
        }, 1000);
      });
  }
}
