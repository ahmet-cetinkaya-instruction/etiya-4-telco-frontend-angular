import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './customer-billing-account.component.html',
  styleUrls: ['./customer-billing-account.component.css']
})
export class CustomerBillingAccountComponent implements OnInit {
  accountForm = new FormGroup({
    accountName: new FormControl('', Validators.required),
    accountDescription: new FormControl('',Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
