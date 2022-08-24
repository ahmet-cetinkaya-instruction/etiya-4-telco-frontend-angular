import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    gender: new FormControl('Kadın', Validators.required),
    fatherName: new FormControl('', Validators.required),
    motherName: new FormControl('', Validators.required),
    nationalId: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
