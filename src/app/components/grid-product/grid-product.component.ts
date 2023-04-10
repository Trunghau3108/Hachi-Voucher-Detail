import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductList } from 'src/app/models/product.model';
import {State} from '@progress/kendo-data-query';
import * as $ from 'jquery';
/// <reference types="kendo-ui" />
import { PagerType,PagerPosition,PageChangeEvent } from '@progress/kendo-angular-grid';
import { data } from 'jquery';




@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.scss']
})
export class GridProductComponent implements OnInit{
  productList: any;
  take: number = 20;
  skip: number = 0;
  limits: number[] = [10, 20, 50];
  public buttonCount = 4;



  constructor(private productService: ProductsService) {
   
   }
  
  

  ngOnInit() {
    this.productService.getListProduct().subscribe((product: ProductList) => {
      this.productList = product.ObjectReturn?.Data;
      console.log(this.productList);
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
  

