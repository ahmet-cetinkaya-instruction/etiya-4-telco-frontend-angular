import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './customer-contact-medium.component.html',
  styleUrls: ['./customer-contact-medium.component.css']
})
export class CustomerContactMediumComponent implements OnInit {
  selectedCustomerId!:number;
  updateCustomerContactForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.createFormUpdateContactCustomer();
    this.getCustomerById();
  }

  createFormUpdateContactCustomer(){
    this.updateCustomerContactForm = this.formBuilder.group({
      email: ['', Validators.required],
      homePhone: ['',Validators.required],
      mobilePhone: ['', Validators.required],
      faxNumber: ['', Validators.required]
    });
  }
  getCustomerById() {
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) this.selectedCustomerId = params['id'];
    })
  }

}
