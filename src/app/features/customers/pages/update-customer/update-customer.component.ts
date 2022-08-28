import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  updateCustomerForm!: FormGroup;
  selectedCustomerId!: number;
  customers!: Customer;

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomersService) { }


  ngOnInit(): void {
    this.getCustomerById();

  }
  // mapFunction() {
  //   this.customers.map(c => {
  //     // this.custs.firstName = c.firstName
  //     // this.custs.middleName = c.middleName
  //     // this.custs.lastName = c.lastName
  //     // this.custs.birthDate = c.birthDate
  //     // this.custs.gender = c.gender
  //     // this.custs.fatherName = c.fatherName

  //     // this.custs.motherName = c.motherName
  //     // this.custs.nationalityId = c.nationalityId

  //     this.omer=c
  //     console.log(this.omer)
  //   })

  // }



  createFormUpdateCustomer() {

    this.updateCustomerForm = this.formBuilder.group({
      firstName: [this.customers!.firstName, Validators.required],
      middleName: [this.customers?.middleName, Validators.required],
      lastName: [this.customers?.lastName, Validators.required],
      birthDate: [this.customers?.birthDate, Validators.required],
      gender: [this.customers?.gender, Validators.required],
      fatherName: [this.customers?.fatherName, Validators.required],
      motherName: [this.customers?.motherName, Validators.required],
      nationalityId: [this.customers?.nationalityId, Validators.required],
    });
  }

  getCustomerById() {
    this.activatedRoute.params.subscribe(params => {
      if (params['customerId']) this.selectedCustomerId = params['customerId'];
    })
    if (this.selectedCustomerId == undefined) {
      //toast
    }

    else {
      this.customerService.getCustomerById(this.selectedCustomerId).subscribe(data => {
        data.forEach(c=>{
              this.customers.firstName = c.firstName
              this.customers.middleName = c.middleName
              this.customers.lastName = c.lastName
              this.customers.birthDate = c.birthDate
              this.customers.gender = c.gender
              this.customers.fatherName = c.fatherName

              this.customers.motherName = c.motherName
              this.customers.nationalityId = c.nationalityId
        })
        console.log(this.customers)
        this.createFormUpdateCustomer()
      })
    }
  }


}
