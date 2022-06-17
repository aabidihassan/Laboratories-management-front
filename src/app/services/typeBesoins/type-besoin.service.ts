import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeBesoinService {

  constructor(private http : HttpClient) { }

  public gettypes():Observable<any>{
    return this.http.get(environment.apiUrl+"types/");
  }
}
