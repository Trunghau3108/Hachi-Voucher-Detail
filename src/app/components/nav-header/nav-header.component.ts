import { Component, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})

export class NavHeaderComponent{

  handleButtonClick(event: any) {
    const buttonValue = event.target.value;
    console.log(`You clicked the ${buttonValue} button!`);
  }
}
