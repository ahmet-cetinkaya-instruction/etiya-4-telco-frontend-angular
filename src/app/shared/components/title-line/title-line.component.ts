import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-line',
  templateUrl: './title-line.component.html',
  styleUrls: ['./title-line.component.css'],
})
export class TitleLineComponent implements OnInit {
  @Input() titleName!: string;
  constructor() {}

  ngOnInit(): void {}
}
