import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-accordion-header',
  templateUrl: './table-accordion-header.component.html',
  styleUrls: ['./table-accordion-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableAccordionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
