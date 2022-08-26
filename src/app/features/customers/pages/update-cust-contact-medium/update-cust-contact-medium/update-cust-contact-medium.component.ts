import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './update-cust-contact-medium.component.html',
  styleUrls: ['./update-cust-contact-medium.component.css']
})
export class UpdateCustContactMediumComponent implements OnInit {
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
