import { Component, OnInit, Input } from "@angular/core";
import { Author } from "../authors";
@Component({
  selector: "app-author-detail",
   template: `
    <div *ngIf="author">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button (click)="handleDelete()">x</button>
    </div>
  `,
  styles: [``],
})
export class AuthorDetailComponent  {
  @Input() author: Author;
  handleDelete(){}
}
