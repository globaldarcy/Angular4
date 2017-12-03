import { Component, TemplateRef, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: "app-hosts",
  templateUrl: "./hosts.component.html",
  styleUrls: ["./hosts.component.css"]
})
export class HostsComponent implements AfterViewInit {
  condition: boolean = false;
  @ViewChild("tpl") tplRef: TemplateRef<any>;
  context = {
    message: "Hello ngOutletContext!",
    $implicit: "Hello, Semlinker!"
  };
  constructor(private vcRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.vcRef.createEmbeddedView(this.tplRef);
  }
}
