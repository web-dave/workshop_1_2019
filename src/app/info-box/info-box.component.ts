import { Component, OnInit } from "@angular/core";

@Component({
  selector: "wd-info-box",
  templateUrl: "./info-box.component.html",
  styleUrls: ["./info-box.component.scss"]
})
export class InfoBoxComponent implements OnInit {
  isHidden = false;
  constructor() {}

  ngOnInit() {}
}
