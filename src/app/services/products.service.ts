import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ProductList,Product,User,Task } from '../DTO/product.dto';
import { DataSourceRequestState, toDataSourceRequest } from '@progress/kendo-data-query';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiUrl = 'http://test.lapson.vn/api/product/';
 
  constructor(private http: HttpClient) { }
// lấy danh sách sản phẩm
  getListProduct(state: DataSourceRequestState): Observable<ProductList> {
    let queryStr = toDataSourceRequest(state);
    return this.http.post<ProductList>(this.apiUrl + 'GetListProduct',queryStr);
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

  //thêm mới sản phẩm
  insertProduct(id = 0,barcode:any): Observable<Product>{
    return this.http.post<Product>(this.apiUrl + 'GetProduct', { Code: id, Barcode: barcode });
  }

  //search sản phẩm
  searchProducts(searchTerm: string): Observable<ProductList> {
    const body = {
      filter : `Barcode~contains~'${searchTerm}'~or~Poscode~contains~'${searchTerm}'~or~ProductName~contains~'${searchTerm}' `,
      sort: "Code-desc"
    }

    return this.http.post<ProductList>(this.apiUrl + 'GetListProduct', body);
  }







  //Todo
  //user
  getListUser(): Observable<User> {
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users");
  }

  //task
  getTaskList(id: number): Observable<Task[]> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/todos`;
    return this.http.get<Task[]>(url);
    
  }
  //Todo
}


