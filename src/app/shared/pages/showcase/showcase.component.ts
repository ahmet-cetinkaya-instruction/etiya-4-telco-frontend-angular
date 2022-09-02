import { Component, Input, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { TokenUserModel } from 'src/app/core/auth/models/tokenUserModel';
import { AuthService } from 'src/app/core/auth/services/auth/auth.service';

@Component({
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
})
export class ShowcaseComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  confirm() {
    this.messageService.add({
      detail: 'Are you sure you want to delete the customer',
      severity: 'warn',
      key: 'c',
      sticky: true,
    });
  }

  customToast() {
    this.messageService.add({
      detail: 'Please contact your system administrator',
      severity: 'info',
      summary: 'Forgot password?',
      key: 'etiya-custom',
    });
  }

  warningMessage() {
    this.messageService.add({
      detail: 'The password was entered incorrectly 3 times.',
      key: 'etiya-warn',
    });
  }
}
