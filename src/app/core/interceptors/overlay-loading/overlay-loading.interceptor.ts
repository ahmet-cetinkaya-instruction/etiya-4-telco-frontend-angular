import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';import { OverlayLoadingService } from '../../services/overlay-loading/overlay-loading.service';
;

@Injectable()
export class OverlayLoadingInterceptor implements HttpInterceptor {
  constructor(
    public overlayService: OverlayLoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if((request.method == "POST" || request.method == "PUT" || request.method == "DELETE")){
      this.overlayService.handleRequest('plus');
    return next
      .handle(request)
      .pipe(
        finalize(this.finalize.bind(this))
      );
    }
    return next.handle(request)
    
  }

  finalize = (): void =>{
    setTimeout(() => {
    this.overlayService.handleRequest()
  }, 1000)
  } 
}
