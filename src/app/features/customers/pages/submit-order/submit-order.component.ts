import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/features/orders/models/order';
import { OrderService } from 'src/app/features/orders/services/order/order.service';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  templateUrl: './submit-order.component.html',
  styleUrls: ['./submit-order.component.css'],
})
export class SubmitOrderComponent implements OnInit {
  selectedCustomerId!: number;
  billingAccountId!: number;
  order!: Order;
  customer!: Customer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private customerService: CustomersService
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getOrderStore();
  }

  getParams() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedCustomerId = params['id'];
      if (params['billingAccountId'])
        this.billingAccountId = params['billingAccountId'];
      this.getCustomerById();
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
          this.customer = data;
        });
    }
  }
  getOrderStore() {
    this.orderService.order$.subscribe((data) => {
      this.order = data;
      console.log(data);
    });
  }

  get amount(): number {
    let sumAmount: number = 0;
    if (this.order.offers === undefined) return sumAmount;
    this.order.offers.forEach((offer) => {
      sumAmount += offer.products.reduce(
        (beforeAmount, product) => beforeAmount + product.amount,
        0
      );
    });
    return sumAmount;
  }

  submitOrder() {
    this.orderService
      .addOrder(this.order, this.customer, this.billingAccountId)
      ?.subscribe();
  }
}
