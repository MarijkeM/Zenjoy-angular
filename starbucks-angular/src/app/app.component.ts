import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{  
  active = 1;
  ngAfterViewInit(): void {

  }
  
  title = 'starbucks-angular';

  openReward(evt:any, points:any) {
    console.log(points);

  };
}
