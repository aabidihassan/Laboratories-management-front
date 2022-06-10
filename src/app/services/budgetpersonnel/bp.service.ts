import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BpService {

  constructor(private httpClient : HttpClient) { }

  public getbpbybudget(id : number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"bp/byidbudget/"+id);
  }

  public getUsersWithBpByBudget(id : number, username : String):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"bp/withusers/"+username+"?id="+id);
  }
}
