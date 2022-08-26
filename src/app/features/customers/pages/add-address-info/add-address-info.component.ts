import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-address-info',
  templateUrl: './add-address-info.component.html',
  styleUrls: ['./add-address-info.component.css']
})
export class AddAddressInfoComponent implements OnInit {
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
