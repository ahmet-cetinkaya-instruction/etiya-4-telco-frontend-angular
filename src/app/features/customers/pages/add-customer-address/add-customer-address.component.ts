import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './add-customer-address.component.html',
  styleUrls: ['./add-customer-address.component.css']
})
export class AddCustomerAddressComponent implements OnInit {

 addressForm!:FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createAddressForm();
  }

  
  createAddressForm(){
    this.addressForm = this.formBuilder.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      flatNumber: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


}
