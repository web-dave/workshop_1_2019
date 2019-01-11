import { Component, OnInit, OnDestroy } from "@angular/core";
import { IBook } from "../book";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../book.service";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "wd-book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.scss"]
})
export class BookEditComponent implements OnInit, OnDestroy {
  book: IBook;
  sub: Subscription;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit() {
    this.sub = this.route.params
      .pipe(mergeMap(params => this.service.getBook(params.isbn)))
      .subscribe(b => (this.book = b));
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
