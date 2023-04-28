import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductList } from 'src/app/DTO/product.dto';
import { Product } from 'src/app/DTO/product.dto';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
import { DrawerComponent } from "@progress/kendo-angular-layout";
import {
  DialogService,
  DialogRef,
  DialogCloseResult,
  DialogAction,
} from "@progress/kendo-angular-dialog";
import * as $ from 'jquery';

/// <reference types="kendo-ui" />


@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.scss']
})
export class GridProductComponent implements OnInit{

  @Input() drawerRef!: DrawerComponent;

  selectedProduct: Product | null = null;

  
  id: any;
  productList: any;
  product!: Product;
  take: number = 15;
  page: number = 1;
  skip: number = 0;
  limits: number[] = [10, 20, 50];
  public btnCount = 4;
  pageSize: number = 15;

 
  

 
  @Output() openDrawer = new EventEmitter<Product>();
  

  constructor(private productService: ProductsService) {}


 
// pager
  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.take = event.take;
    this.page = this.skip / this.take + 1; // cập nhật giá trị cho trang hiện tại
  }
  

//Lấy thông tin sản phẩm
 public getProduct(id: any) {
      this.productService.getProduct(id).subscribe((product: Product) => {
      this.openDrawer.emit(product);
    },
    (error) => {
      console.log(error);
    });
  }


//Xóa sản phẩm
  public deleteProduct(id: any){
    this.productService.deleteProduct(id).subscribe(
      (product: Product) => {
        if (product.StatusCode === 0) {
          console.log('Xóa sản phẩm thành công');
        } else {
          console.log(product);
        }
      },
      (error) => {
        console.log('Lỗi khi xóa sản phẩm:', error);
      }
    );
  }
  
  ngOnInit() {

    //load list sản phẩm
      this.productService.getListProduct().subscribe((product: ProductList) => {
      this.productList = product.ObjectReturn?.Data;
      // console.log(this.productList);      
    },
    (error) => {
      console.log(error);
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
  

