import { Directive, HostBinding, Input, HostListener, Attribute } from '@angular/core';

@Directive({
  selector: "[appGreet]"
})
export class GreetDirective {
  @Input() appGreet: string;
  @HostBinding() get innerText() {
    return this.appGreet;
  }
  @HostListener('click', ['$event'])
  onclick(event) {
    this.appGreet = 'Clicked!';
  }
  constructor(@Attribute('abc') public abc: string) {
    console.log(abc + 1);
  }
}
