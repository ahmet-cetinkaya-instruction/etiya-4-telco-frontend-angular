import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css'],
})
export class TableInfoComponent implements OnInit {
  @Input() tableList!: any[];
  constructor() {}

  ngOnInit(): void {}
}
