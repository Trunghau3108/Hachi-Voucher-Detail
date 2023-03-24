import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})

export class NavHeaderComponent implements OnInit{

  handleButtonClick(event: any) {
    const buttonValue = event.target.value;
    console.log(`You clicked the ${buttonValue} button!`);
  }

  ngOnInit(){
    $('.btn2').css({'padding':'0 10px','box-shadow': '0 4px 8px 0 rgba(0,0,0,0.1)'});
    $('.btn4').css({'background-color':'#BDC2D2'});
    $('.btn5').css({'background-color':'#1A6634'});
    $('.gr-btn2').css({'border-right': '1px solid #DBDEE7',
    'margin': '6px','padding-right': '10px'});
    $('.gr-btn3').css({'padding-right': '10px','padding-top': '5px'})
  }
}
