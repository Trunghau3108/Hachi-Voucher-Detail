import { Component,OnInit } from '@angular/core';
import { FormatSettings  } from '@progress/kendo-angular-dateinputs';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  public date = new Date()
  public format: FormatSettings = {
    displayFormat: "dd/MM/yyyy",
    inputFormat: "dd/MM/yyyy",
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
