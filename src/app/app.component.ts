import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "wd1-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "workshop UHU";
  hideBox: boolean;
  constructor(private service: Title) {
    console.log(service);
    service.setTitle("FooHuHu");
  }
  pong(e: string) {
    console.warn(e);
  }
}
