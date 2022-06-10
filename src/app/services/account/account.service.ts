import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user/user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient) { }

  public newuser(username : String, user : User):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"users/newuser/"+username, user);
  }

}
