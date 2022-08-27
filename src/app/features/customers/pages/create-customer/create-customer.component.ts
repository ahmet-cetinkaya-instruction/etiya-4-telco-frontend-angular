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

@Component({
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  profileForm!: FormGroup;
  createCustomerModel$!: Observable<Customer>;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomersService,
    private router: Router
  ) {
    this.createCustomerModel$ = this.customerService.customerToAddModel$;
  }

  ngOnInit(): void {
    this.createFormUpdateCustomer();
  }

  createFormUpdateCustomer() {
    this.profileForm = this.formBuilder.group({
      firstName: [
        this.createCustomerModel$.pipe(
          map(state => {
            return state.firstName;
          })
        ),
        Validators.required,
      ],
      middleName: [''],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['Female', Validators.required],
      fatherName: [''],
      motherName: [''],
      nationalityId: ['', Validators.required],
    });
  }
  goNextPage() {
    this.customerService.setDemographicInfo(this.profileForm.value);
    this.router.navigateByUrl('/dashboard/customers/list-address-info');
  }
}
