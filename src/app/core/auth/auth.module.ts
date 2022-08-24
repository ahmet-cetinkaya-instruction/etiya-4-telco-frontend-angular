import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { StoreModule } from '@ngrx/store';
import { authReducers } from './store/auth.reducers';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    SharedModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(authReducers)    
  ],
  providers:[MessageService]
})
export class AuthModule { }
