import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Offer } from '../../models/offer';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  apiControllerUrl: string = `${environment.apiUrl}/offers`;

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(this.apiControllerUrl);
  }
}
