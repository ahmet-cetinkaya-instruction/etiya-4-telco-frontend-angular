import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CityService } from 'src/app/features/city/services/city/city.service';
import { City } from '../../models/city';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  templateUrl: './add-customer-address.component.html',
  styleUrls: ['./add-customer-address.component.css']
})
export class AddCustomerAddressComponent implements OnInit {

 addressForm!:FormGroup 
 selectedCustomerId!: number;
 customer!: Customer;
 cityList!:City[];

  constructor(private formBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomersService,
    private router:Router,
    private messageService:MessageService,
    private cityService:CityService) { }

  ngOnInit(): void {
    this.createAddressForm();
    this.getAddressList();
    this.getCustomerById();
  }

  
  createAddressForm(){
    this.addressForm = this.formBuilder.group({
      id:[Math.floor(Math.random()*1000)],
      city: ['', Validators.required],
      street: ['', Validators.required],
      flatNumber: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  getCustomerById() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedCustomerId = params['id'];
    });
    if (this.selectedCustomerId == undefined) {
      //toast
    } else {
      this.customerService
        .getCustomerById(this.selectedCustomerId)
        .subscribe((data) => {          
            this.customer=data
            this.createAddressForm();          
        });
    }
  }

  getAddressList() {
    this.cityService.getList().subscribe(data => {
      this.cityList = data;
    })
  }

  save(){
    this.customerService.addAddress(this.addressForm.value,this.customer).subscribe();
  }
  


}
