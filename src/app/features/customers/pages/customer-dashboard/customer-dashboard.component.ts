import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  customerList! : Customer[];
  customerList1! : Customer[];
  lenght!:number;

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomersList();
  }

  getCustomersList(){
    this.customersService.getList().subscribe(response=>{
      this.customerList= response

    })
  }


  search(event:any){

    console.log(event)
    this.customerList1 = event
    this.lenght = this.customerList1.length

  }


}