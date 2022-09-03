import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Offer } from 'src/app/features/offers/models/offer';
import { environment } from 'src/environments/environment';
import { Campaign } from '../../models/campaign';
import { SearchCampaign } from '../../models/searchCampaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  apiControllerUrl: string = `${environment.apiUrl}/campaigns`;
  apiUrl: string = `${environment.apiUrl}/offers`;

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(this.apiControllerUrl);
  }

  getListByFilter(searchCampaign: SearchCampaign): Observable<Offer[]> {
    const subject = new Subject<Offer[]>();
    this.httpClient.get<Offer[]>(this.apiUrl).subscribe({
      next: (response) => {
        let filteredCampaigns = response;
        if (searchCampaign.selectedId) {
          filteredCampaigns = filteredCampaigns.filter(
            (item) => item.type.id == searchCampaign.selectedId           
          );
          console.log(response)
        }

        if (searchCampaign.campaignId) {
          filteredCampaigns = filteredCampaigns.filter(
            (item) => item.type.id == searchCampaign.campaignId
          );
        }
        if (searchCampaign.campaignName) {
          filteredCampaigns = filteredCampaigns.filter((item) =>
            item
              .name!.toLowerCase()
              .includes(searchCampaign.campaignName.toLowerCase())
          );
        }
        subject.next(filteredCampaigns.filter((campaign) => campaign.type.typeName === 'campaign') );
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
