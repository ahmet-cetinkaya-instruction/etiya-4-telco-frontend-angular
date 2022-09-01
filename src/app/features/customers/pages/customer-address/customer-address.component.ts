import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../../models/address';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {
  
  selectedCustomerId!: number;
  customerAddress: Address[] =[];

  constructor(private activatedRoute:ActivatedRoute, 
    private customerService:CustomersService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCustomerById();
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
            data.addresses?.forEach(adress =>{
              this.customerAddress.push(adress)
            })         
                   
        });
    }
  }

  addAddressBySelectedId(){
    this.router.navigateByUrl(`/dashboard/customers/add-customer-address/${this.selectedCustomerId}`)
  }
  selectAddressId(id:number){
    this.router.navigateByUrl(`/dashboard/customers/add-customer-address/${id}`)
  }
  
}
