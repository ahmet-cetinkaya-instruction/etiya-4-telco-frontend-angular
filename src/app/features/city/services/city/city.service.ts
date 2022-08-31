import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/features/customers/models/city';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiControllerUrl: string = `${environment.apiUrl}/cities`;

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.apiControllerUrl);
  }
}
