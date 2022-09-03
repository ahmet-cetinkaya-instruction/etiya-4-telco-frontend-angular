import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Offer } from 'src/app/features/offers/models/offer';
import { OfferService } from 'src/app/features/offers/services/offer/offer.service';
import { ProductConfigDto } from 'src/app/features/products/models/productConfigDto';
import { Address } from '../../models/address';
import { BillingAccount } from '../../models/billingAccount';
import { Customer } from '../../models/customer';
import { Product } from '../../models/product';
import { CustomersService } from '../../services/customer/customers.service';

@Component({
  templateUrl: './configuration-product.component.html',
  styleUrls: ['./configuration-product.component.css'],
})
export class ConfigurationProductComponent implements OnInit {
  basket!: Offer[];

  selectedCustomerId!: number;
  billingAccountId!: number;
  customer!: Customer;
  billingAdress!: Address[] 

  constructor(
    private offerService: OfferService,
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.getParams();

    this.listenBasket();
  }

  listenBasket() {
    this.offerService.basket$.subscribe((data) => {
      this.basket = [...data];
    });
  }

  isTypeProduct(product: Product, type: string): boolean {
    return product.name.toLowerCase().includes(type);
  }
  handleConfigInput(
    event: any,
    offer: Offer,
    product: Product,
    configurationKey: string
  ) {
    const productConfigDto: ProductConfigDto = {
      key: configurationKey,
      value: event.target.value,
    };

    this.offerService.changeConfigOfProductInBasketInStore(
      offer,
      product,
      productConfigDto
    );
    console.log(event.target.value);
  }
  getConfigValueOfProduct(
    offer: Offer,
    product: Product,
    configurationKey: string
  ): string {
    const findProduct: Product = offer.products.find(
      (p) => p.id === product.id
    ) as Product;
    if (
      findProduct.config == undefined ||
      findProduct.config[configurationKey] == undefined
    )
      return '';

    return findProduct.config[configurationKey];
  }
  getParams() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedCustomerId = params['id'];
      if (params['billingAccountId'])
        this.billingAccountId = params['billingAccountId'];

      this.getCustomerById();

      this.getCustomerBiliingAccountAddress();
    });
  }

  getCustomerById() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedCustomerId = params['id'];
    });
    if (this.selectedCustomerId == undefined) {
      //toast
    } else {
      this.customersService
        .getCustomerById(this.selectedCustomerId)
        .subscribe((data) => {
          this.customer = data;
        });
    }
  }
  getCustomerBiliingAccountAddress() {
    this.customer.billingAccounts?.forEach((data) => {
      data.addresses.forEach((res) => {
        console.log(res.city.name);
      });
    });
  }
}
