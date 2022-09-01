import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/features/city/services/city/city.service';
import { City } from '../../models/city';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  selector: 'app-add-address-info',
  templateUrl: './add-address-info.component.html',
  styleUrls: ['./add-address-info.component.css']
})
export class AddAddressInfoComponent implements OnInit {
  addressForm!: FormGroup;
  cityList!: City[];

  constructor(private formBuilder: FormBuilder,
    private customersService: CustomersService,
    private router: Router,
    private cityService: CityService) { }

  ngOnInit(): void {
    this.getAddressList();
    this.createAddressForm();
  }


  createAddressForm() {
    this.addressForm = this.formBuilder.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      flatNumber: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addAddress() {
    this.customersService.addAddressInfoToStore(this.addressForm.value);
    this.router.navigateByUrl('/dashboard/customers/list-address-info');
  }
  
  getAddressList() {
    this.cityService.getList().subscribe(data => {
      this.cityList = data;
    })
  }
}
