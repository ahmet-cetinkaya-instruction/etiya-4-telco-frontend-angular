import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  showConfirm() {
      this.messageService.clear()
      this.messageService.add({ key: 'c', sticky: true, severity: 'warn', detail: 'Your changes could not be saved. Are you sure?' })
  }
  onConfirm() {
      this.messageService.clear('c')
  }
  onReject() {
      this.messageService.clear('c')
  }

}
