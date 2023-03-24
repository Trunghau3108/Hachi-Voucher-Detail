import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormatSettings } from '@progress/kendo-angular-dateinputs';
import * as $ from 'jquery';
/// <reference types="kendo-ui" />



@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})

export class MainContentComponent implements OnInit{

   selectedDate!:string;
   isDisabled: boolean = true;
   inputValue!: string 

  //enalbe datepicker
   public isDateEnabled = false;
   public onDateCheckboxChange() {
     this.isDateEnabled = !this.isDateEnabled;
   }

   public listRelease: any[] = [
    "Phiếu bán",
    "Phiếu tặng",
  ];
  public listRecei:any[] = [
    "CH Hachi Hachi CMT8",
    "CH Hachi Hachi QT",
    "CH Hachi Hachi NVT"
  ];
  public value: Date = new Date();
  public format: FormatSettings = {
    displayFormat: "dd/MM/yyyy",
    inputFormat: "dd/MM/yyyy",
  };
  
 
  disabledDates = (date: Date) => {
    const today = new Date();
    return date <= today;
  }
  constructor() {
      
  }
  onInputKeypress(event: KeyboardEvent): void {
    const charCode = event.which || event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

     ngOnInit(): void {
      $(document).ready(function(){
        $('kendo-icon').addClass('k-icon-drop')
        $('.k-datepicker button.k-input-button.k-button.k-icon-button.k-button-md.k-button-solid.k-button-solid-base').css({'border-left':'none',
        'color':'#959DB3',
        'background-color':'#F5F6F8',

      });
      $('.k-datepicker .k-input-inner').css({
        'text-align':'left',
        'margin-left':'7px'
     });
      $('<style>.k-i-caret-alt-down.k-icon.k-icon-drop::before { content: " \\e015"; color: #959DB3; font-size:20px; padding-right: 6px }</style>').appendTo('head');
     $('.custom-checkbox').change(function() {
      if ($(this).prop('checked')) {
        $('#input-time').prop('disabled', false);
        $('.k-datepicker').prop('disabled', true);
      } else {
        $('#input-time').prop('disabled', true);
        $('.k-datepicker').prop('disabled', false);
      }
    });

    var checkbox = $('#date-checkbox');
    var validityTime = $('#validity-time').get(0) as HTMLInputElement;
    checkbox.change(function() {
      var checkbox = document.getElementById('date-checkbox') as HTMLInputElement;
      if (checkbox.checked) {
        // Nếu checkbox được check, mở trường input nhập ngày của Kendo datepicker và khóa trường input thời gian hiệu lực
        if (validityTime) {
          validityTime.disabled = true;
        }
      } else {
        // Nếu checkbox không được check, khóa trường input nhập ngày của Kendo datepicker và mở trường input thời gian hiệu lực
        if (validityTime) {
          validityTime.disabled = false;
        }
      }
    });

    

    });
    }
}
