import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CityService } from 'src/app/features/city/services/city/city.service';
import { Address } from '../../models/address';
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
 selectedAddressId!: number;
 customer!: Customer;
 addressToUpdate!: Address;
 cityList!:City[];

  constructor(private formBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomersService,
    private router:Router,
    private messageService:MessageService,
    private cityService:CityService) { }

  ngOnInit(): void {
    this.getParams();
    this.getCityList();
  }

  getParams(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedCustomerId = params['id'];
      if (params['addressId']) this.selectedAddressId = params['addressId'];

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
            console.debug("🐞 ➜ file: add-customer-address.component.ts ➜ line 51 ➜ AddCustomerAddressComponent ➜ .subscribe ➜ data", data);
            this.customer=data

            if(this.customer.addresses?.find(address => address.id == this.selectedAddressId) !== undefined)
              this.addressToUpdate = this.customer.addresses?.find(address => address.id == this.selectedAddressId) as Address; // Address | undefined,  as Address -> Address

            this.createAddressForm();
        });
    }
  }

  createAddressForm(){
    this.addressForm = this.formBuilder.group({
      city: [this.addressToUpdate?.city || "", Validators.required],
      street: [this.addressToUpdate?.street || '', Validators.required],
      flatNumber: [this.addressToUpdate?.flatNumber || '', Validators.required],
      description: [this.addressToUpdate?.description || '', Validators.required]
    });
  }

  getCityList() {
    this.cityService.getList().subscribe(data => {
      this.cityList = data;
    })
  }

  save(){
    if(this.addressToUpdate === undefined) this.add();
    else this.update();
  }
  
  add(){
    this.customerService.addAddress(this.addressForm.value,this.customer).subscribe();
  }

  update(){
    const addressToUpdate:Address = {...this.addressForm.value, id: this.selectedAddressId};
    this.customerService.updateAddress(addressToUpdate,this.customer).subscribe();
  }
}
