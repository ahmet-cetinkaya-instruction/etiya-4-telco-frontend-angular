import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/features/orders/services/order/order.service';

@Component({
  templateUrl: './submit-order.component.html',
  styleUrls: ['./submit-order.component.css'],
})
export class SubmitOrderComponent implements OnInit {
  selectedCustomerId!: number;
  billingAccountId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
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
    });
  }
  getOrderStore() {
    this.orderService.order$.subscribe((data) => {
      console.log('data: ', data);
    });
  }
}
