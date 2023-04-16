import { Component, AfterViewInit} from '@angular/core';
import { FormatSettings } from '@progress/kendo-angular-dateinputs';
import { PopupComponent } from '@progress/kendo-angular-popup';
import { DateTimePickerComponent } from '@progress/kendo-angular-dateinputs';
import * as $ from 'jquery';


@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss']
})
export class DatetimepickerComponent implements AfterViewInit {

  Datetimepicker!: JQuery<HTMLElement>;

  constructor() {}

  public date = new Date();
  public formatTime: FormatSettings = {
    displayFormat: "dd/MM/yyyy HH:mm a",
    inputFormat: "dd/MM/yyyy HH:mm a",
  };

  
  ngAfterViewInit(): void {
    $(document).ready(() => {
      this.Datetimepicker = $('.DatetimePicker').detach();
      console.log(this.Datetimepicker)
    });
  }
  
  
  OpenTime() {
    $(document).ready(() =>{
      $('.k-time-header').append(this.Datetimepicker);
      console.log($('.k-time-header'));

      
      $('kendo-timeselector').removeClass('k-disabled');
    });
  }
  



  ngOnInit(): void{}

}

