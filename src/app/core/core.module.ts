import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CreateFakeArrayPipe } from './pipes/create-fake-array/create-fake-array.pipe';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';
import { StorageService } from './storage/services/local-storage/storageService';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LocalStorageService } from './storage/services/local-storage/local-storage.service';

export function jwtOptionsFactory(storageService:StorageService) {
  return {
    tokenGetter: () => {
      return storageService.get('token');
    },
    allowedDomains: ['localhost:3000']
  }
}

@NgModule({
  declarations: [
    CreateFakeArrayPipe,
    PaginationPipe,
    OverlayLoadingComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [LocalStorageService]
      }
    })
  ],
  exports:[
    CreateFakeArrayPipe,
    PaginationPipe,
    OverlayLoadingComponent
  ]
})
export class CoreModule { }
