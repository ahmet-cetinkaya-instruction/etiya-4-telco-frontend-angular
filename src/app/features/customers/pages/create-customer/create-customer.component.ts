import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customer/customers.service';
import { Router } from '@angular/router';
import { CustomerDemographicInfo } from '../../models/customerDemographicInfo';

@Component({
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  profileForm!: FormGroup;
  createCustomerModel$!: Observable<Customer>;
  customer!: Customer;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomersService,
    private router: Router
  ) {
    this.createCustomerModel$ = this.customerService.customerToAddModel$;
  }

  ngOnInit(): void {
    this.createCustomerModel$.subscribe((state) => {
      this.customer = state;
      this.createFormUpdateCustomer();
    });
  }

  createFormUpdateCustomer() {
    this.profileForm = this.formBuilder.group({
      firstName: [this.customer.firstName, Validators.required],
      middleName: [this.customer.middleName],
      lastName: [this.customer.lastName, Validators.required],
      birthDate: [this.customer.birthDate, Validators.required],
      gender: [this.customer.gender ?? 'Female', Validators.required],
      fatherName: [this.customer.fatherName],
      motherName: [this.customer.motherName],
      nationalityId: [this.customer.nationalityId, Validators.required],
    });
  }
  goNextPage() {
    this.customerService.setDemographicInfoToStore(this.profileForm.value);
    this.router.navigateByUrl('/dashboard/customers/list-address-info');
  }
}
