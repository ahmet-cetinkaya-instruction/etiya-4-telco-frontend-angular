import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomersService } from 'src/app/features/customers/services/customer/customers.service';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css'],
})
export class SideFilterComponent implements OnInit {
  @Input() filterTitle!: string;
  searchForm!: FormGroup;
  @Output() filteredData: any = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.createSearchForm();
  }

  createSearchForm(): void {
    this.searchForm = this.formBuilder.group({
      id: [''],
      customerId: [''],
      accountNumber: [''],
      gsmNumber: [''],
      firstName: [''],
      lastname: [''],
      orderNumber: [''],
    });
  }

  search() {
    this.customersService
      .getListByFilter(this.searchForm.value)
      .subscribe((data) => {
        this.filteredData.emit(data);
      });
  }
  clear() {
    this.createSearchForm();
  }
}
