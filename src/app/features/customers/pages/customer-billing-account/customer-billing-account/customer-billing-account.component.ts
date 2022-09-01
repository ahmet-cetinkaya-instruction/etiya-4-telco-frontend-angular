import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/features/city/services/city/city.service';
import { City } from '../../../models/city';
import { CustomersService } from '../../../services/customer/customers.service';
import { Address } from '../../../models/address';
import { Customer } from '../../../models/customer';

@Component({
  templateUrl: './customer-billing-account.component.html',
  styleUrls: ['./customer-billing-account.component.css']
})
export class CustomerBillingAccountComponent implements OnInit {

  accountForm!:FormGroup;
  addressForm!:FormGroup;
  isShown:boolean = false;
  cityList!: City[];
  billingAdress: Address[] = [];
  selectedCustomerId!:number;
  customer!:Customer;
  

  constructor(private formBuilder:FormBuilder, 
    private cityService:CityService,
    private customerService:CustomersService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
    this.getCityList();
  }

  getParams(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedCustomerId = Number(params['id']);
      this.getCustomerById();
    });
  }
  
  getCustomerById() {
    if (this.selectedCustomerId == undefined) {
      //toast
    } else {
      this.customerService
        .getCustomerById(this.selectedCustomerId)
        .subscribe((data) => {          
            this.customer=data
            this.createAddressForm();
            this.createAccountForm();
        });
    }
  }


  
  createAccountForm() {
    this.accountForm = this.formBuilder.group({
      accountName: ['', Validators.required],
      accountDescription: ['', Validators.required]
    });
  }

  createAddressForm() {
    this.addressForm = this.formBuilder.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      flatNumber: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addNewAddressBtn(){
    this.isShown = true;
    this. createAddressForm();
  }

  getCityList() {
    this.cityService.getList().subscribe(data => {
      this.cityList = data;
    })
  }

  addAddress() {
    this.billingAdress.push(this.addressForm.value)
    console.log(this.billingAdress);
    this.isShown = false;
  }



}
