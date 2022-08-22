import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/IProduts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) { }

  public sendGetRequestProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }
}
