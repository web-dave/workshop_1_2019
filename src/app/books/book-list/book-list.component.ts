import { Component, OnInit, OnDestroy } from "@angular/core";
import { IBook } from "../book";
import { BookService } from "../book.service";
import { Subscription } from "rxjs";

@Component({
  selector: "wd-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  sub: Subscription;
  constructor(private service: BookService) {}

  ngOnInit() {
    this.sub = this.service
      .getBooks()
      .subscribe(
        bs => (this.books = bs),
        err => console.error(err),
        () => console.warn("DONE")
      );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
