import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  profileForm!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.createFormUpdateCustomer();
  }

  createFormUpdateCustomer(){
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['',Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['Kadın', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      nationalId: ['', Validators.required],
    });
  }
}
