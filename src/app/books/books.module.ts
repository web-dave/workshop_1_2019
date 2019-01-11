import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books/books.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { ConfirmCandeactivateGuard } from "./confirm-candeactivate.guard";
import { BookEditComponent } from "./book-edit/book-edit.component";

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent
  ],
  imports: [CommonModule, BooksRoutingModule, FormsModule],
  exports: [BooksComponent, BookListComponent],
  providers: [ConfirmCandeactivateGuard]
})
export class BooksModule {}
