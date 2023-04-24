import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ProductList,Product } from '../DTO/product.dto';



@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiUrl = 'http://test.lapson.vn/api/product/GetListProduct/';

  constructor(private http: HttpClient) { }

  getListProduct(): Observable<ProductList> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<ProductList>(this.apiUrl,{},httpOptions);
  }
  getProduct(): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Product>("http://test.lapson.vn/api/product/GetProduct",{},httpOptions);
  }


}


