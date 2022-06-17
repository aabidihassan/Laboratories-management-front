import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Besoin } from 'app/models/besoins/besoin';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BesoinsService {

  constructor(private httpClient : HttpClient) { }

  public save(besoin : Besoin):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"besoins/",besoin);
  }

  public besoinbybp(id:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"besoins/"+id);
  }
}
