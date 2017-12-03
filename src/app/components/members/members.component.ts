import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { MemberService } from "../../services/member.service";

interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.css"]
})
export class MembersComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    /* this.http
      .get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
      .map(res => res.json())
      .subscribe(data => {
        if (data) {
          this.members = data;
        }
      }); */
    this.memberService.getMembers().subscribe(data => {
      if (data) {
        this.members = data;
      }
    });
  }
}
