import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'etiya-overlay-title',
  templateUrl: './overlay-title.component.html',
  styleUrls: ['./overlay-title.component.css'],
})
export class OverlayTitleComponent implements OnInit {
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
