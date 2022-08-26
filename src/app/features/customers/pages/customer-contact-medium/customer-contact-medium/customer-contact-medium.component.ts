import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './customer-contact-medium.component.html',
  styleUrls: ['./customer-contact-medium.component.css']
})
export class CustomerContactMediumComponent implements OnInit {

  updateCustomerContactForm!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.createFormUpdateContactCustomer();
  }

  createFormUpdateContactCustomer(){
    this.updateCustomerContactForm = this.formBuilder.group({
      email: ['', Validators.required],
      homePhone: ['',Validators.required],
      mobilePhone: ['', Validators.required],
      faxNumber: ['', Validators.required]
    });
  }


}
