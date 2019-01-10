import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "wd-mouse-cursor",
  templateUrl: "./mouse-cursor.component.html",
  styleUrls: ["./mouse-cursor.component.scss"]
})
export class MouseCursorComponent implements OnInit {
  @Input() isHidden: boolean;

  ox: number;
  oy: number;
  constructor() {}

  ngOnInit() {}
  move(e: MouseEvent) {
    this.ox = e.offsetX;
    this.oy = e.offsetY;
  }
}
