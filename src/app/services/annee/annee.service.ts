import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnneeService {

  constructor(private httpClient : HttpClient) { }

  public getYears():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"annees/");
  }
}
