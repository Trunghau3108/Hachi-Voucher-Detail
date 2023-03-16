import { formatNumber } from '@angular/common';
import { Directive, ElementRef,HostListener } from '@angular/core';


@Directive({
  selector: '[appMoneyFormat]'
})
export class CurrencyFormatPipe{

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const newValue = parseFloat(value.replace(/[^0-9\.]/g, '')).toFixed(2);
    if (!isNaN(parseFloat(newValue))) {
      input.value = newValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      input.value = input.value.replace(/\.00$/, '');
    } else {
      input.value = '';
    }
  }

}
