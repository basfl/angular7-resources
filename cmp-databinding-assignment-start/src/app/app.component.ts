import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber:number[]=[];
  evenNumber:number[]=[];

  onIntervalFired(event:number){
    console.log("###"+event);
    if(event%2==0){
      this.evenNumber.push(event)
    }else{
      this.oddNumber.push(event)
    }
  }
}
