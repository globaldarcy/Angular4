import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <p>{{msg}}</p>
      <input #myInput type="text" [(ngModel)]="msg" (keydown.enter)="onEnter($event, myInput.value)" [ngClass]="{mousedown: isMousedown}"
      (mousedown)="isMousedown = true"
      (mouseup)="isMousedown = false"
      (mouseleave)="isMousedown = false">
      <button (click)="update.emit({text: msg})">点击</button>
    </div>
  `,
  styles: [`
   :host { margin: 100px; background:red;}
   .mousedown { border: 2px solid green; }
   input:focus { font-weight: bold; outline: none;}
  `]
})
export class SimpleFormComponent implements OnInit {

  isMousedown: boolean;
  @Input('message') msg: string;
  @Output() update  = new EventEmitter<{text: string}>();
  constructor() { }

  ngOnInit() {
  }

  onEnter(e, value) {
    console.log(e);
    console.log(value);
  }
  onClick(e, value) {
    console.log(value.value);
    console.log(e.value);
    value.value = "";
  }
}
