import { Component, OnInit} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductList } from 'src/app/DTO/product.dto';
import { Product } from 'src/app/DTO/product.dto';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';

import * as $ from 'jquery';

/// <reference types="kendo-ui" />


@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.scss']
})
export class GridProductComponent implements OnInit{
 

  public productData = [];
  selectProduct: any;
  public expanded2 = false;
  public expanded3 = false;
  public filterValue: string = '';

  
  productList: any;
  product!: Product;
  take: number = 15;
  page: number = 1;
  skip: number = 0;
  limits: number[] = [10, 20, 50];
  public btnCount = 4;
  pageSize: number = 15;

  private stake: State = {
    skip: 1,
    take: 50,
    filter: {
      logic: 'or',
      filters: [
        { field: 'Barcode', operator: 'contains', value: '', ignoreCase: true }
      ]
    },
    sort: [{ field: 'Code', dir: 'desc' }]
  }
  public openedDlgDel = false;
  public openedDlgEdit = false;

 

  

  constructor(private productService: ProductsService) {}
  


  
   //open dialog Delete
  public openDlgDel(id:any): void {
    this.productService.getProduct(id).subscribe((product: Product) => {
      this.selectProduct = product.ObjectReturn; 
      this.openedDlgDel = true; 
      console.log(this.selectProduct)
    }, (error) => {
      console.log(error);
    });
  }
  //close
  public closeDlgDel(): void {
    this.openedDlgDel = false;
    this.selectProduct = null;
  }

 
  //open dialog Edit
  public openDlgEdit(id:any): void {
    this.productService.getProduct(id).subscribe((product: Product) => {
      this.selectProduct = product.ObjectReturn; 
      this.openedDlgEdit = true; 
      console.log(this.selectProduct)
    }, (error) => {
      console.log(error);
    });
  }
//close
  public closeDlgEdit(): void {
    this.openedDlgEdit = false;
    this.selectProduct = null;
  }


  public closeDrawer2(){
    this.expanded2 = false;
  }

  public closeDrawer3(){
    this.expanded3 = false;
  }
  

 
// pager
  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.take = event.take;
    this.page = this.skip / this.take + 1; // cập nhật giá trị cho trang hiện tại
  }
  

//Lấy thông tin sản phẩm
 public getProduct(id: any) {
      this.productService.getProduct(id).subscribe((product: Product) => {
      this.selectProduct = product.ObjectReturn;
      this.expanded2 = true;
      console.log(this.selectProduct)
    },
    (error) => {
      console.log(error);
    });
  }
  
  //update sản phẩm
  public updateProduct(code:any,price:any){
    this.productService.updateProduct(code,price).subscribe(
      (product: Product) => {
        if (product && product.ObjectReturn) {
          if (product.StatusCode === 0) {
            console.log(product);
            console.log('success');
            this.closeDlgEdit();
          } else {
            console.log(product);
          }
        } else {
          console.log(product);
        }
      },
      (error) => {
        console.log('Lỗi khi cập nhật sản phẩm:', error);
      }
    );
  }


  // Filter Product
  public onChangeFilter(value: any) {
    this.filterValue = value;
  }
  public SearchFilter(value: string) {
    const stakeFilter: State = {
      skip: 1,
      take: 50,
      filter: {
        logic: 'or',
        filters: [
          { field: 'Barcode', operator: 'contains', value: value, ignoreCase: true },
          { field: 'ProductName', operator: 'contains', value: value, ignoreCase: true },
          { field: 'Poscode', operator: 'contains', value: value, ignoreCase: true }
        ]
      },
      sort: [{ field: 'Code', dir: 'desc' }]
    }
    this.productService.getListProduct(stakeFilter).subscribe((product:any) => {
    this.productList = product.ObjectReturn?.Data

      console.log(this.productList)
    })
  }

//Xóa sản phẩm
  public deleteProduct(id: any){
    this.productService.deleteProduct(id).subscribe(
      (product: Product) => {
        if (product.StatusCode === 0) {
          console.log('Xóa sản phẩm thành công');
          this.closeDlgDel();
        } else {
          console.log(product);
        }
      },
      (error) => {
        console.log('Lỗi khi xóa sản phẩm:', error);
      }
    );
  }

  // load listproduct
 public loadProduct(){
    this.productService.getListProduct(this.stake).subscribe((product: ProductList) => {
      this.productList = product.ObjectReturn?.Data;  
    },
    (error) => {
      console.log(error);
    });
  }
  
  ngOnInit() {
    //load list sản phẩm  
      this.loadProduct();
    
    // jquery
    $(document).ready(function(){
    $('kendo-pager-page-sizes .k-label').html("<span>Hiển thị mỗi trang</span>");
    $('.k-pager-first').html("<span>Đầu</span>");
    $('kendo-pager-prev-buttons button:nth-child(2)').html(
      '<img src="assets/images/left.svg" alt="left">'
    );
    $('.k-pager-last').html("<span>Cuối</span>");
    $('kendo-pager-next-buttons button:nth-child(1)').html(
      '<img src="assets/images/right.svg" alt="right">'
    );
    });
  }
}
  

