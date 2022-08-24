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

     /**
   * [
   *  sendGetRequestProducts(), se optiene todos los productos
   *  de la api en la url 'http://localhost:3000/products'
   * ]
   * @version [1,0.0]
   *
   * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
   * @since [1,0,0]
   *
   */
  public sendGetRequestProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }
}
