import { Component, Input, OnInit, OnChanges } from "@angular/core";

@Component(
  {
    selector: 'progress-bar',
    template:`
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
   styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
  }
)
export class ProgressbarComponent implements OnInit
{
  @Input() progressColor = '#2e8b57';
  @Input() backgroundColor='tomato';
  private _progress
  @Input() 
  get progress():number{
    return this._progress;
  }
  set progress(value:number){
    if (typeof value!= "number"){
      const progress = Number(value);
      if (Number.isNaN(progress)){
        this._progress = 0
      } else{
        this._progress = progress;
      }
    }else{
      this._progress =value
    }
  }
ngOnInit(){}
}