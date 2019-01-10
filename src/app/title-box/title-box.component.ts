import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "wd-title-box",
  templateUrl: "./title-box.component.html",
  styleUrls: ["./title-box.component.scss"]
})
export class TitleBoxComponent implements OnInit {
  @Input() boxTitle: string;
  @Output() ping = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  pingPong() {
    this.ping.emit(this.boxTitle);
  }
}
