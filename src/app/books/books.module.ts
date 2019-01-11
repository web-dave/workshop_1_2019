import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books/books.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { ConfirmCandeactivateGuard } from "./confirm-candeactivate.guard";

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailComponent],
  imports: [CommonModule, BooksRoutingModule],
  exports: [BooksComponent, BookListComponent],
  providers: [ConfirmCandeactivateGuard]
})
export class BooksModule {}
