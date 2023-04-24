import { Component, OnInit,Input,ViewEncapsulation   } from '@angular/core';
import { FormatSettings  } from '@progress/kendo-angular-dateinputs';
import * as $ from 'jquery';
/// <reference types="kendo-ui" />


@Component({
  selector: 'app-coupon-content',
  templateUrl: './coupon-content.component.html',
  styleUrls: ['./coupon-content.component.scss']
})
export class CouponContentComponent implements OnInit {
  @Input() selectedItem!: string;
  
  allChecked: boolean = false;
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  isChecked4: boolean = false;

  isPublic = false;
  isIdentified = false;
  selectedOption = false;

  selectedLang = 'vi'; 
  name = '';
  description = '';
  explanation = '';

  nameVI = 'Giảm 100K';
  descriptionVI = 'Áp dụng cho đơn hàng có giá trị trên 600.000 đ';
  explanationVI = 'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22';

  nameJA = '';
  descriptionJA = '';
  explanationJA = '';

  nameEN = '';
  descriptionEN = '';
  explanationEN = '';
 
 
  public date = new Date()
  public format: FormatSettings = {
    displayFormat: "dd/MM/yyyy",
    inputFormat: "dd/MM/yyyy",
  };
  
  onToggleDrawer(isOpen: boolean) {
    console.log(isOpen);
    // Do something with the isOpen value
  }

  

  // xử lí chuyển đổi form ngôn ngữ
  setCurrentLanguage(lang: string): void {
    this.selectedLang = lang;
  }
  
  onLangSelect(lang: string) {
    this.selectedLang = lang;
    this.setCurrentLanguage(lang);
  
    if (lang === 'vi') {
      this.name = this.nameVI;
      this.description = this.descriptionVI;
      this.explanation = this.explanationVI;
    } else if (lang === 'ja') {
      this.name = this.nameJA;
      this.description = this.descriptionJA;
      this.explanation = this.explanationJA;
    } else if (lang === 'en') {
      this.name = this.nameEN;
      this.description = this.descriptionEN;
      this.explanation = this.explanationEN;
    }
  }
 
 
  
    constructor() {}
    
    // Xử lí disable date
    disableDates(date: Date) {
      const currentDate = new Date();
      // Lấy ngày, tháng, năm hiện tại
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDate();
      // Lấy ngày, tháng, năm của ngày truyền vào
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      // So sánh ngày, tháng, năm của hai ngày
      return year < currentYear
        || (year === currentYear && month < currentMonth)
        || (year === currentYear && month === currentMonth && day < currentDay);
    }

    // xử lí nhập chữ vào input số
    onInputKeypress(event: KeyboardEvent): void {
      const charCode = event.which || event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
      }
    }

    // xử lí checkbox 
    onSubCboxChanged() {
      if (this.isChecked1 && this.isChecked2 && this.isChecked3 && this.isChecked4) {
        this.allChecked = true;
      } else {
        this.allChecked = false;
      }
    }
    onAllCboxChanged() {
      if (this.allChecked) {
        this.isChecked1 = true;
        this.isChecked2 = true;
        this.isChecked3 = true;
        this.isChecked4 = true;
      } else {
        this.isChecked1 = false;
        this.isChecked2 = false;
        this.isChecked3 = false;
        this.isChecked4 = false;
      }
    }
    onOptionChange(event: any) {
      // Bỏ chọn tất cả các radio button khác
      if (event) {
        this.selectedOption = event;
      }
    }
  
  ngOnInit(): void {
   
  }; 
}
  
  

