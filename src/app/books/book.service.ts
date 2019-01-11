import { Injectable } from "@angular/core";
import { IBook } from "./book";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class BookService {
  url = "http://localhost:4730/books/";

  constructor(private http: HttpClient) {}
  getBooks() {
    return this.http.get<IBook[]>(this.url);
  }
  getBook(isbn) {
    return this.http.get<IBook>(`${this.url}${isbn}`);
  }
  updateBook(book: IBook) {
    return this.http.put<IBook>(`${this.url}${book.isbn}`, book);
  }
}
