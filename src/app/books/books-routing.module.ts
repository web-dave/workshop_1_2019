import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BooksComponent } from "./books/books.component";
import { ConfirmCandeactivateGuard } from "./confirm-candeactivate.guard";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookNewComponent } from "./book-new/book-new.component";

const routes: Routes = [
  {
    path: "",
    component: BooksComponent,
    children: [
      {
        path: "",
        component: BookListComponent
      },
      {
        path: "new",
        component: BookNewComponent
      },
      {
        path: ":isbn",
        component: BookDetailComponent,
        canDeactivate: [ConfirmCandeactivateGuard]
      },
      {
        path: ":isbn/edit",
        component: BookEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
