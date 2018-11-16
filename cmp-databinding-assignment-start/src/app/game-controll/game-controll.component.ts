import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {
  interval;
  @Output() intervalFired = new EventEmitter<number>()
 
  startInterval = 0

  constructor() { }

  ngOnInit() {
  }
  onStartGame() {
    console.log("start!!")

    this.interval = setInterval(() => { 
      this.intervalFired.emit(this.startInterval + 1);
      this.startInterval++;
      
     }, 1000)

  }
  onPauseGame(){
    clearInterval(this.interval);
  }

}
