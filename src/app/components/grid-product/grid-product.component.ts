import { Component, OnInit  } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductList } from 'src/app/models/product.model';
import { Product } from 'src/app/models/product.model';
import { PageChangeEvent } from '@progress/kendo-angular-grid';

import * as $ from 'jquery';
/// <reference types="kendo-ui" />


@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.scss']
})
export class GridProductComponent implements OnInit{
  
  productList: any;
  product: any;

  take: number = 15;
  page: number = 1;
  skip: number = 0;
  limits: number[] = [15, 20, 50];
  public btnCount = 4;
  pageSize: number = 15;

  // filter: string = "";
  // sort: string = "";
  // products: Product[] = [];
  // total: number = 0;
  // gridData: Product[] = [];

  


  constructor(private productService: ProductsService) {}

  

  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.take = event.take;
    this.page = this.skip / this.take + 1; // cập nhật giá trị cho trang hiện tại
  }
  
  // loadProducts(): void {
  //   const body = {
  //     page: this.page,
  //     pageSize: this.pageSize,
  //     filter: this.filter,
  //     sort: this.sort
  //   };
  //   this.productService.getListProduct(body).subscribe((result) => {
  //     this.products = result.ObjectReturn?.Data ?? [];
  //     this.total = result.ObjectReturn?.Total ?? 0;
  //     this.gridData = this.products;
  //     // console.log(this.gridData);
  
  //   });
  // }
  
  
 


   deleteSelectedProducts(productCode: string) {
    // Tìm kiếm vị trí của sản phẩm cần xóa trong mảng productList
    const index = this.productList.findIndex((product:Product) => product.Code === productCode);
    if (index !== -1) {
      // Nếu tìm thấy, sử dụng phương thức splice() để xóa sản phẩm khỏi mảng
      this.productList.splice(index, 1);
      console.log(`Bạn đã xóa sản phẩm code ${productCode}`);
    }
  }

  ngOnInit() {
      // this.loadProducts();
      this.productService.getListProduct().subscribe((product: ProductList) => {
      this.productList = product.ObjectReturn?.Data;
      // console.log(this.productList);
    });
    this.productService.getProduct().subscribe((product: Product) => {
      this.product = product.ImageThumb;
      // console.log(this.productList);
    });



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
  

