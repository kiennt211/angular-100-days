import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ProgressbarComponent } from "./progress-bar/progressbar.component";
import { AuthorListComponent } from "./authors/author-list.component";
import { AuthorDetailComponent } from "./authors/author-detail.component";
import { ToggleComponent } from "./toggle.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ProgressbarComponent,AuthorListComponent,AuthorDetailComponent,ToggleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
