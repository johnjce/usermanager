import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpInfo } from '../models/signup-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<string> {
    return this.http.get(this.userUrl+'/users', { responseType: 'text' });
  }

  
  getUser(name:string): Observable<string> {
    return this.http.get(this.userUrl+'/user/'+name,{ responseType: 'text' });
  }

}
