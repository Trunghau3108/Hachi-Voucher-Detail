import { Component, OnInit } from '@angular/core';
import flatpickr from "flatpickr";
import { format,isValid,parse,setYear } from 'date-fns';
import { yearsPerPage } from '@angular-material-components/datetime-picker';




@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
 
})

export class MainContentComponent implements OnInit{
   selectedDate!:string;
   isDisabled: boolean = true;
   inputValue!: string 
   moneyValue = '';
  
   constructor(){}

  

   onInputChange(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const isNumber = !isNaN(Number(value));

    if (!isNumber) {
      input.value = '';
    }
  }

  updateDateValue(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const date = parse(value, 'ddMMyyyy', new Date());
   
    if (isValid(date)) {
      const formattedDate = format(date, 'dd-MM-y');
      input.value = formattedDate;
      this.selectedDate = formattedDate;
    }
    // console.log(this.selectedDate);
  }

  
     ngOnInit(): void {
      flatpickr("#calendar", {
        dateFormat: "d-m-Y",
        closeOnSelect: true,
        onChange: (selectedDate, dateStr) => {
          this.selectedDate = dateStr;
        }
     });
     }
    
     toggleDisabled(): void {
      this.isDisabled = !this.isDisabled;
      if (this.isDisabled) {
        flatpickr("#calendar", {
          dateFormat: "d-m-Y",
          disable: [
            function(date) {
              return date < new Date();
            }
          ],
          onChange: (selectedDates, dateStr) => {
            this.selectedDate = dateStr;
          }
        });
      } else {
        flatpickr("#calendar", {
          dateFormat: "d-m-Y",
          closeOnSelect: true,
          onChange: (selectedDates, dateStr) => {
            this.selectedDate = dateStr;
          }
        });
      }
      
    }
}
