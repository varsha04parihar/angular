import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from './login';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8081/api/v1/check";

  constructor(private httpClient: HttpClient) { }
  
  
//   registeration(user: User): Observable<Object>{
//     return this.httpClient.post(`${this.baseURL}`, user);
//   }

public loginUserFromRemote(login : Login):Observable<any>
{
  return this.httpClient.post<any>("http://localhost:8081/api/v1/check", login);

}
  
}