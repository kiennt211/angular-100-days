import {
  Component,
  VERSION,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  ViewChildren,
  QueryList
} from "@angular/core";
import { ToggleComponent } from "./toggle.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChildren(ToggleComponent) toggleComps: QueryList<ToggleComponent>;
  @ViewChild("nameInput", { static: true })
  nameInput: ElementRef<HTMLInputElement>;
  name = "Angular " + VERSION.major;
  color = "red";
  isBlue = true;
  currentProgress = 10;
  isChecked = false;
  showLast = true;
  // ngOnInit() {
  //   this.nameInput.nativeElement.focus()
  // }
  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.nameInput.nativeElement.focus();
    // }, 3000);
    this.toggleComps.changes.subscribe(console.log);
    // apiCall.subcribe(() => {
    //   this.toggleComp.toggle();
    // })
  }
  questions = {
    question1: true,
    question2: false,
    question3: true
  };
}
