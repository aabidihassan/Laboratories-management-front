import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from 'app/models/budget/budget';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private httpClient : HttpClient) { }

  public labosbudgets(labo : String):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"budgets/"+labo);
  }

  public newbudget(labo : String, budget : Budget):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"budgets/"+labo, budget)
  }
}
