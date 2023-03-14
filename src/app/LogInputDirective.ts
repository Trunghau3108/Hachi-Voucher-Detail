import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input'
})
export class LogInputDirective {
  @HostListener('blur', ['$event.target'])
  onBlur(target: HTMLInputElement) {
    console.log(`Input value: ${target.value}`);
  }

  @HostListener('keyup.enter', ['$event.target'])
  onEnter(target: HTMLInputElement) {
    console.log(`Input value: ${target.value}`);
  }

}
