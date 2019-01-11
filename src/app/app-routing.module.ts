import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/books"
  },
  {
    path: "about",
    pathMatch: "full",
    redirectTo: "/about"
  },
  {
    path: "books",
    loadChildren: "./books/books.module#BooksModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
