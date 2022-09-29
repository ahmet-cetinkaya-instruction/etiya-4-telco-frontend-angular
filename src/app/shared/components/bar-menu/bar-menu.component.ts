import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css'],
})
export class BarMenuComponent implements OnInit {
  selectedCustomerId!: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        if (params['id']) this.selectedCustomerId = Number(params['id']);
      },
    });
  }
}
