import { Component, Input, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.css']
})
export class CustomToastComponent implements OnInit {
  @Input() customSeverity!:string;
  @Input() customSummary!:string;
  @Input() customDetail!:string;
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  showCustomMessage() {
    this.messageService.add({severity: this.customSeverity, summary: this.customSummary, detail: this.customDetail, life: 3000000});
  }

}
