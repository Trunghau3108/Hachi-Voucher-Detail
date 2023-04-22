import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})

export class NavHeaderComponent implements OnInit{


  public items: BreadCrumbItem[] = [
    { text: "CHÍNH SÁCH" },
    { text: "COUPON" },
    { text: "THÔNG TIN ĐỢT PHÁT HÀNH" },
   
  ];
  handleButtonClick(event: any) {
    const buttonValue = event.target.value;
    console.log(`You clicked the ${buttonValue} button!`);
  }

  ngOnInit(){}
}
