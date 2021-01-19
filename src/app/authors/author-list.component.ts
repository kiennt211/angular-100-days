import { Component, OnInit } from "@angular/core";
import { authors } from "../authors.model";
@Component({
  selector: "app-author-list",
  template: `
    <app-author-detail
      *ngFor="let author of authors"
      [author]="author"
    ></app-author-detail>
  `,
  styles: [``]
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  constructor() {}
  ngOnInit() {}
}
