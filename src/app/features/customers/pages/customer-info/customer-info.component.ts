import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  selectedCustomerId!:number
  customer!:Customer;
  constructor(private activatedRoute:ActivatedRoute,private customerService:CustomersService, private router:Router) { }

  ngOnInit(): void {
    this.getCustomerById();
  }

  getCustomerById(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['customerId']) this.selectedCustomerId=params['customerId'];
    })
    if(this.selectedCustomerId==undefined){
      //toast
    }
    
    else{
      this.customerService.getCustomerById(this.selectedCustomerId).subscribe(data =>{
        this.customer = data
      })
    }
  }

  getCustomerId(customer:Customer){
    this.router.navigateByUrl(`/update-customer/${customer.id}`)
  }



}
