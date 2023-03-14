import { Component, OnInit } from '@angular/core';
import flatpickr from "flatpickr";
import { format } from 'date-fns';




@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
 
})

export class MainContentComponent implements OnInit{
   selectedDate!:string;
   isDisabled: boolean = true;
   inputValue!: string 
  
 
  onInputChanges(event: any){
    const input = event.target as HTMLInputElement;
    const value = input.value;
  }
   constructor(){}
   onInputChange(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const isNumber = !isNaN(Number(value));

    if (!isNumber) {
      input.value = '';
    }
  }



   
     ngOnInit(): void {
      flatpickr("#calendar", {
        dateFormat: "d-m-Y",
        closeOnSelect: true,
        onChange: (selectedDates, dateStr) => {
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
              // disable dates before today
              return date < new Date();
            }
          ],
          onChange: (selectedDates, dateStr) => {
            this.selectedDate = dateStr;
            this.selectedDate = format(new Date(this.selectedDate), 'dd/MM/yyyy');
          }
        });
      } else {
        flatpickr("#calendar", {
          dateFormat: "d-m-Y",
          closeOnSelect: true,
          onChange: (selectedDates, dateStr) => {
            this.selectedDate = dateStr;
            this.selectedDate = format(new Date(this.selectedDate), 'dd/MM/yyyy');
          }
        });
      }
      
    }
}
