import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BudgetPersonnel } from 'app/models/budgetpersonnel/budget-personnel';
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

  public getUsersWithBpByBudget(id : Number, username : String):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"bp/withusers/"+username+"?id="+id);
  }

  public newBudgetPersonnel(bp : BudgetPersonnel):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"bp/", bp)
  }

  public getUserBp(username:String):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"bp/byuser/"+username);
  }
}
