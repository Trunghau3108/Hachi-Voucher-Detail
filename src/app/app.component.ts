import { Component,ViewChild} from '@angular/core';
import {
  DrawerItem,
  DrawerItemExpandedFn,
  DrawerSelectEvent,
} from "@progress/kendo-angular-layout";
import { DrawerComponent } from '@progress/kendo-angular-layout';
import { Product } from './DTO/product.dto';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer1') drawer1!: DrawerComponent;
  @ViewChild('drawer2') drawer2!: DrawerComponent;
  
  

  public selectedProduct: Product | undefined;
  public selected = "Menu";
  public expanded1 = false;
  public expanded2 = false;
 

  constructor(private productService:ProductsService) {}
 
  

  public expandedIndices = [2];
  public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) >= 0;
  };

  
  toggleDrawer(product: Product) {
    this.selectedProduct = product;
    this.expanded2 = true;
  }
  
  public updateProduct(code:any,price:any){
    this.productService.updateProduct(code,price).subscribe(
      (product: Product) => {
        if (product && product.ObjectReturn) {
          if (product.StatusCode === 0) {
            console.log(product);
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
  

  
  public items: Array<DrawerItem> = [
   
    { text: "KHUYẾN MÃI", icon: "k-i-inbox"},
    { text: "NỘI DUNG WEBSITE", icon: "k-i-bell" },
    { text: "QUẢN LÝ BANNER", icon: "k-i-calendar" },

    { text: "CHÍNH SÁCH", icon: "k-i-envelop-link",id:4 },
    //text-child
    { text: "Coupon", parentId:4 },
    { text: "xxxxxxxx",parentId:4 },
    { text: "xxxxxxxx", parentId:4  },
    { text: "xxxxxxxx", parentId:4  },
    { text: "xxxxxxxx", parentId:4 },
    { text: "xxxxxxxx",parentId:4 },
    


    { text: "BÁO CÁO EXCEL", icon: "k-i-star-outline" },
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
    const current = ev.item.id;

    if (this.expandedIndices.indexOf(current) >= 0) {
      this.expandedIndices = this.expandedIndices.filter(
        (id) => id !== current
      );
    } else {
      this.expandedIndices.push(current);
    }
  }
}

