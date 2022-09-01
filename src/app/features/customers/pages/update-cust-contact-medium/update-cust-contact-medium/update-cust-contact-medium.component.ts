import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Customer } from '../../../models/customer';
import { CustomersService } from '../../../services/customer/customers.service';

@Component({
  templateUrl: './update-cust-contact-medium.component.html',
  styleUrls: ['./update-cust-contact-medium.component.css']
})
export class UpdateCustContactMediumComponent implements OnInit {
  updateCustomerContactForm!:FormGroup;
  selectedCustomerId!:number;
  customer!:Customer;

  constructor(private formBuilder:FormBuilder, private activatedRoute:ActivatedRoute, 
    private messageService:MessageService, private customersService:CustomersService, private router:Router) { }


  ngOnInit(): void {
    this.getCustomerById();
  }

  createFormUpdateContactCustomer(){
    this.updateCustomerContactForm = this.formBuilder.group({
      email: [this.customer.contactMedium?.email, Validators.required],
      homePhone: [this.customer.contactMedium?.homePhone,Validators.required],
      mobilePhone: [this.customer.contactMedium?.mobilePhone, Validators.required],
      fax: [this.customer.contactMedium?.fax, Validators.required]
    });
  }
  getCustomerById(){
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) this.selectedCustomerId = params['id'];
      console.log(this.selectedCustomerId)
    })
    if(this.selectedCustomerId == undefined) {
      this.messageService.add({detail: 'Customer not found!...', severity:'danger', summary:'error', key:'etiya-custom'})
    }
    else {
      this.customersService.getCustomerById(this.selectedCustomerId).subscribe(data => {
        this.customer = data;
        this.createFormUpdateContactCustomer();
      })
    }
  }
  update(){
    if(this.updateCustomerContactForm.invalid) {
      this.messageService.add({detail: 'Please fill required areas!', severity:'danger', summary:'error', key:'etiya-custom'})
      return;
    }
    this.customersService.updateContactMedium(this.updateCustomerContactForm.value, this.customer).subscribe(() => {
      this.router.navigateByUrl(`/dashboard/customers/customer-contact-medium/${this.customer.id}`);
      this.messageService.add({detail:'Sucsessfully updated',severity:'success',summary:'Update',key:'etiya-custom'}) 
    });
  }
}
