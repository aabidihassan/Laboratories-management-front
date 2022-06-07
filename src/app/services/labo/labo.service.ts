import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user/user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboService {

  constructor(private httpClient : HttpClient) { }

  public newlabo(user : User):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"labos/newlabo", user)
  }
}
