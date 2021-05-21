import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { Address } from './address';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8081/api/v1/checkEmail";

  constructor(private httpClient: HttpClient) { }
  
  
//   registeration(user: User): Observable<Object>{
//     return this.httpClient.post(`${this.baseURL}`, user);
//   }

addUserDetails(user:any)
{
    return this.httpClient.post(this.baseURL,user,{responseType:'text'});
}

private baseURL1 = "http://localhost:8081/api/v1/userUpdateDetail";
updateUser(id: String, user: User): Observable<Object>{
  return this.httpClient.put(`${this.baseURL1}/${id}`, user);
}
 
private baseURL2 = "http://localhost:8081/api/v1/findAllUsers";
getUserById(id: String): Observable<User>{
  return this.httpClient.get<User>(`${this.baseURL2}/${id}`);
}

private baseURL3 = "http://localhost:8081/api/v1/deleteUser";

deleteUser(id: String): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL3}/${id}`);
}
}