import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../book.service";
import { IBook } from "../book";
import { mergeMap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "wd-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.scss"]
})
export class BookDetailComponent implements OnInit, OnDestroy {
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
