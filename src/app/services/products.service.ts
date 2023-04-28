import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ProductList,Product } from '../DTO/product.dto';



@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiUrl = 'http://test.lapson.vn/api/product/';
 
  constructor(private http: HttpClient) { }
// lấy danh sách sản phẩm
  getListProduct(): Observable<ProductList> {
    return this.http.post<ProductList>(this.apiUrl + 'GetListProduct',{
      sort: 'Code-desc',
    });
  }

// lấy sản phẩm chi tiết
  getProduct(id:any): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + 'GetProduct', { Code: id });
  }

  //Xóa sản phẩm
  deleteProduct(id:any): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + 'DeleteListProduct', [{ Code: id }]);
  }

  //update sản phẩm
  updateProduct(code: number, price:number): Observable<Product> {
    const updateData = {
      DTO: {
        Code: code,
        Price: price,
      },
      Properties: ["Price"]
    };
    return this.http.post<Product>(this.apiUrl + 'UpdateProduct', updateData);
  }
}


