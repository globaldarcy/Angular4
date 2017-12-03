import { Component, OnInit, Inject } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { MailService } from "../../services/mail.service";
import { inject } from "@angular/core/testing";

interface Users {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: "app-home",
  template: `
    <h2 appGreet>123</h2>
    <app-simple-form *ngFor="let message of mailService.messages" [message]="message.text" (update)="onUpdate(message.id, $event.text)">
    </app-simple-form>
    <ul *ngIf="mailService">
      <li *ngFor="let message of mailService.messages; index as i; first as f">
        {{f}} - {{i}} ------ {{message.text}}
      </li>
    </ul>
    <ul *ngIf="apiDatas">
      <li *ngFor="let item of apiDatas;">
        <p>
          userId: <span>{{item.userId}} <br></span>
          ID：<span>{{item.id}}<br></span>
          title: <span>{{item.title}}<br></span>
          body: <span>{{item.body}}</span>
        </p>
      </li>
    </ul>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  apiDatas: Users[];
  // constructor(private mailService: MailService) { }
  constructor(
    private http: Http,
    @Inject(MailService) private mailService,
    @Inject("apiUrl") private apiUrl
  ) {}

  onUpdate(id, text) {
    this.mailService.update(id, text);
  }

  ngOnInit() {
    console.log(this.mailService.message + " @Inject");
    console.log(this.apiUrl + " @Inject");
    this.http
      .get(this.apiUrl + "posts")
      .map(res => res.json())
      .subscribe(data => {
        if (data) {
          this.apiDatas = data;
        }
      });
  }
}
