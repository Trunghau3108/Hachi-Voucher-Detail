import { Component, OnInit  } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductList } from 'src/app/DTO/product.dto';
import { Product } from 'src/app/DTO/product.dto';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
import { DrawerItem, DrawerMode,DrawerPosition } from "@progress/kendo-angular-layout";
import {
  DialogService,
  DialogRef,
  DialogCloseResult,
  DialogAction,
} from "@progress/kendo-angular-dialog";
import * as $ from 'jquery';
import { style } from '@angular/animations';
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
  public expandMode: DrawerMode = "overlay";
  

  constructor(private productService: ProductsService,private dialogService: DialogService) {}


  // show dialog
  public showConfirmation(): void {
    const dialog: DialogRef = this.dialogService.open({
      title: "XÓA SẢN PHẨM",
      content: `Bạn có chắc chắn muốn xóa sản phẩm...`,
      actions: [{ text: "Không xóa" }, { text: "Xóa"}],
      width: 316,
      height: 243,
      minWidth: 250,
    });

    dialog.result.subscribe((result) => {
      console.log(result)
    });
  }
 
 
// pager
  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.take = event.take;
    this.page = this.skip / this.take + 1; // cập nhật giá trị cho trang hiện tại
  }
  

  public items: Array<DrawerItem> = [
    { text: "Inbox", icon: "k-i-inbox", selected: true },
    { text: "Notifications", icon: "k-i-bell" },
    { text: "Calendar", icon: "k-i-calendar" },
    { text: "Attachments", icon: "k-i-envelop-link" },
    { text: "Favourites", icon: "k-i-star-outline" },
  ];

  
  ngOnInit() {
      // this.loadProducts();
      this.productService.getListProduct().subscribe((product: ProductList) => {
      this.productList = product.ObjectReturn?.Data;
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
  

