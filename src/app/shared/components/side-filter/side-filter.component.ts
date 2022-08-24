import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent implements OnInit {
  @Input() filterTitle!:string
  constructor() { }

  ngOnInit(): void {
  }

}
