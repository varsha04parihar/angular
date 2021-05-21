import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private baseURL = "http://localhost:8081/api/v1/findAllProducts";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }
  
 // getProductList(): Observable<Product[]>{
   // return this.httpClient.get<Product[]]>(`${this.baseURL}`);
 // }
//   registeration(user: User): Observable<Object>{
//     return this.httpClient.post(`${this.baseURL}`, user);
//   }
}
