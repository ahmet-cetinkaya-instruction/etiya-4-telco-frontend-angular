import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Offer } from 'src/app/features/offers/models/offer';
import { environment } from 'src/environments/environment';
import { Catalog } from '../../models/catalog';
import { searchCatalog } from '../../models/searchCatalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {
  apiControllerUrl: string = `${environment.apiUrl}/catalogs`;
  apiUrl: string = `${environment.apiUrl}/offers`;


  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Catalog[]> {
    return this.httpClient.get<Catalog[]>(this.apiControllerUrl);
  }

  getListByFilter(searchCatalog: searchCatalog): Observable<Offer[]> {
    const subject = new Subject<Offer[]>();
    this.httpClient.get<Offer[]>(this.apiUrl).subscribe({
      next: (response) => {
        let filteredCatalogs = response;
        if (searchCatalog.selectedId) {
          filteredCatalogs = filteredCatalogs.filter(
            (item) => item.type.id == searchCatalog.selectedId           
          );
          console.log(response)
        }

        if (searchCatalog.prodOfferId) {
          filteredCatalogs = filteredCatalogs.filter(
            (item) => item.id == searchCatalog.prodOfferId
          );
        }
        if (searchCatalog.prodOfferName) {
          filteredCatalogs = filteredCatalogs.filter((item) =>
            item
              .name!.toLowerCase()
              .includes(searchCatalog.prodOfferName.toLowerCase())
          );
        }
        subject.next(filteredCatalogs);
      },
      error: (err) => {
        subject.error(err);
      },
      complete: () => {
        //en son calısan yer
        subject.complete();
      },
    });
    return subject.asObservable();
  }
}
