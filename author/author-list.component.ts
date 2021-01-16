import { Component, OnInit } from "@angular/core";
import {authors} from "../authors";

@Component({
  selector: "app-author-list",
  template:`<app-author-detail *ngFor="let author of authors"
  [authors] = "author"></app-author-detail>`,
  styles: [''],
})
export class AuthorListCoponent {
  authors =authors;
  Constructor(){}
}