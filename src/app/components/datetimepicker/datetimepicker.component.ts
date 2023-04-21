import { Component, AfterViewInit,ViewChild, OnInit,ElementRef} from '@angular/core';
import { FormatSettings } from '@progress/kendo-angular-dateinputs';
import { DateTimePickerComponent } from '@progress/kendo-angular-dateinputs';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';
import { SelectionEvent } from '@progress/kendo-angular-dropdowns/common/selection/selection.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss']
})
export class DatetimepickerComponent implements AfterViewInit {
  @ViewChild('datetimepicker', { static: false }) datetimePicker!: DateTimePickerComponent;
  @ViewChild('timePicker') timePicker!: ElementRef;
  
  isDateTimePickerDetached: boolean = false;
  public selectedDate: Date | null = new Date();
  public TimeValue: Array<string> = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ];
  onValueChange(event:any){

  }
  public selectedTime: string = this.TimeValue[0];
  public selectedMeridian: string = 'AM';

  public onTimePickerValueChange(event: any): void {
  
  }
  public onMeridianButtonClick(event: any): void {
  
  }
  public onSelect(event: any): void {
  
  }

  
  


  ngAfterViewInit() {
    $(document).ready(() => {
      const datetimePickerElement = $('#datetimePickerPopup').detach();
      $('.k-time-header .k-title').append(datetimePickerElement);
    })
  }
  
  public date = new Date();
  public formatTime: FormatSettings = {
    displayFormat: "dd/MM/yyyy HH:mm a",
    inputFormat: "dd/MM/yyyy HH:mm a",
  };

  
  public onOpen() {
    this.detachDateTimePicker();
    $(document).ready(() => {
      const datetimePickerElement = $('#datetimePickerPopup');
      $('.k-time-header .k-title').text("");

      $('.k-time-header .k-title').append(datetimePickerElement);
      $('kendo-timeselector').removeClass('k-disabled');
    });
  }
  
  public onClose() {
    if (this.isDateTimePickerDetached) {
      $('#datetimePickerPopup').hide();
    } else {
      const datetimePickerElementSaved = $('#datetimePickerPopup');
      $('.k-time-header .k-title').append(datetimePickerElementSaved);
    }
  }
  detachDateTimePicker() {
    const datetimePickerElementSaved = $('#datetimePickerPopup');
    $('body').append(datetimePickerElementSaved);
    this.isDateTimePickerDetached = true;
  }
    }


