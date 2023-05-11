import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  updateProduct(code: number, price:number, priceBase: number){
      return new Observable<any>((obs) => {
        this.http.post<Product>(this.apiUrl + 'UpdateProduct', { 
          DTO: {
          Code: code,
          Price: price,
          PriceBase: priceBase
        },
        Properties: ["Price","PriceBase"]
      }).subscribe((data) => {
          console.log(data); //thanh cong thi console data
          console.log(data.ErrorString);
          obs.complete()
      },(error) =>{
          // console.log(error);
          obs.error(error);
      })
      });
  }


  getProductUpdate(barcode: number){
    return new Observable<any> ((obs) => {
      this.http.post<Product>(this.apiUrl + 'GetProduct', { Code: 0, Barcode: barcode }
      ).subscribe((data) => {
        console.log(data); //thanh cong thi console data
        obs.complete()
      },(error) =>{
        // console.log(error);
        obs.error(error);
    });
    });
  }
  

  //thêm mới sản phẩm
  insertProduct(price:number, priceBase: number){
    return new Observable<any>((obs) => {
      this.http.post<Product>(this.apiUrl + 'UpdateProduct', { 
        DTO: {
        Code: 0,
        Price: price,
        PriceBase: priceBase
      },
      Properties: ["Price","PriceBase"]
    }).subscribe((data) => {
        console.log(data); //thanh cong thi console data
        console.log(data.ErrorString);
        obs.complete()
    },(error) =>{
        // console.log(error);
        obs.error(error);
    })
    });
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


