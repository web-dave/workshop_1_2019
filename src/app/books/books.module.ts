import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books/books.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { ConfirmCandeactivateGuard } from "./confirm-candeactivate.guard";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookNewComponent } from "./book-new/book-new.component";

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent
  ],
  imports: [CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [BooksComponent, BookListComponent],
  providers: [ConfirmCandeactivateGuard]
})
export class BooksModule {}
