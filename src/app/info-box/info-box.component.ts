import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "wd-info-box",
  templateUrl: "./info-box.component.html",
  styleUrls: ["./info-box.component.scss"]
})
export class InfoBoxComponent implements OnInit {
  isHidden = false;
  @Output() hide = new EventEmitter<boolean>();
  constructor() {}

  hider() {
    this.isHidden = !this.isHidden;
    this.hide.emit(this.isHidden);
  }

  ngOnInit() {}
}
