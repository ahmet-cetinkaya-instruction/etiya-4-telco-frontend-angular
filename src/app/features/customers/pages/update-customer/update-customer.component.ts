import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  updateCustomerForm!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.createFormUpdateCustomer();
  }

  createFormUpdateCustomer(){
    this.updateCustomerForm = this.formBuilder.group({
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
