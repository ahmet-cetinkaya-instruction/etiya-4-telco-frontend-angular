import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  @Input() layoutTitle!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
