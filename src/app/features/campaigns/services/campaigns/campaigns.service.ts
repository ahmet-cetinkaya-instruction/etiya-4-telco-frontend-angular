import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campaign } from '../../models/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  apiControllerUrl: string = `${environment.apiUrl}/campaigns`;

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(this.apiControllerUrl);
  }
}
