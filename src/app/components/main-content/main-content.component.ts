import { Component } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  
      // events : string[] = []
      // addEvent(type:string, event: MatDatepickerInputEvent<Date>){
      //   this.events.push(`${type}:${event.value}`);
      // }
    //   allowInputDate = false;
    //   selectedDate: Date;
    //   constructor() {
    //     this.selectedDate = new Date();
    //   }
    // toggleAllowInputDate() {
    // this.allowInputDate = !this.allowInputDate;
    enableDateInput = false;
  selectedDate = '2022-03-15';
}
