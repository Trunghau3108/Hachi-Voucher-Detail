import { Component,OnInit } from '@angular/core';
import { FormatSettings  } from '@progress/kendo-angular-dateinputs';
@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss']
})
export class DatetimepickerComponent implements OnInit {
  
  public date = new Date()
  public format: FormatSettings = {
    displayFormat: "dd/MM/yyyy hh:mm",
    inputFormat: "dd/MM/yyyy hh:mm",
  };
  
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


  ngOnInit(): void {
    
  }
  
}


