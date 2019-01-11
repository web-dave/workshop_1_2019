import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { BookService } from "../book.service";

@Component({
  selector: "wd-book-new",
  templateUrl: "./book-new.component.html",
  styleUrls: ["./book-new.component.scss"]
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private service: BookService) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ["", Validators.required]
    });
  }
  save() {
    console.log(this.form);
    this.service.saveBook(this.form.value).subscribe(() => {});
  }
}
