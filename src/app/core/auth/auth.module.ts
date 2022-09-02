import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { authReducers } from './store/auth.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(authReducers),
  ],
})
export class AuthModule {}
