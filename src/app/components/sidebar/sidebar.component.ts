import { Component } from '@angular/core';
import {
  DrawerItem,
  DrawerItemExpandedFn,
  DrawerSelectEvent,
} from "@progress/kendo-angular-layout";



@Component({
 
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
 
  public selected = "Menu";
  public expanded1 = false;
  
  
  public expandedIndices = [2];
  public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) >= 0;
  };
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
  constructor() {}

  // public closeDrawer(){
  //   this.expanded2 = false;
  // }
  
  // toggleDrawer(product: Product) {
  //   this.selectedProduct = product;
  //   this.expanded2 = true;
  // }
  
  // public updateProduct(code:any,price:any){
  //   this.productService.updateProduct(code,price).subscribe(
  //     (product: Product) => {
  //       if (product && product.ObjectReturn) {
  //         if (product.StatusCode === 0) {
  //           console.log(product);
  //         } else {
  //           console.log(product);
  //         }
  //       } else {
  //         console.log(product);
  //       }
  //     },
  //     (error) => {
  //       console.log('Lỗi khi cập nhật sản phẩm:', error);
  //     }
  //   );
  // }




  
}
