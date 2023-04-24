import { Component,ViewChild } from '@angular/core';
import {
  DrawerItem,
  DrawerItemExpandedFn,
  DrawerSelectEvent,
} from "@progress/kendo-angular-layout";
import { DrawerComponent } from '@progress/kendo-angular-layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer1') drawer1!: DrawerComponent;
  @ViewChild('drawer2') drawer2!: DrawerComponent;

  public selected = "Menu";
  public expanded1 = false;
  public expanded2 = false;

  public  showDrawer = false;
  
  public expandedIndices = [2];
  public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) >= 0;
  };

  toggleDrawer() {
    this.expanded2 = !this.expanded2;
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

