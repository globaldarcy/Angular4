import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  username = "semlinker";
  user = {
    userName: "Darcy"
  };
  /* signupForm: FormGroup;
  this.signupForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  this.signupForm = this.fb.group({
    userName: 'semlinker',
    hasAddress: false
  }); */

  constructor() {}
  versions = ["", "1.x", "2.x", "3.x"];
  onSubmit(value) {
    console.log(value);
    console.dir(value);
  }
  save(value) {
    console.log(value);
  }
  ngOnInit() {}
}
