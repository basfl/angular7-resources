import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // serverElements = [];
  newServerName = '';
  newServerContent = '';
 @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContentInput') serverContentInput:ElementRef 

  constructor() { }

  ngOnInit() {
  }
  onAddServer(inputS) {
    console.log("$$$$$$",inputS.value)
   this.serverCreated.emit({serverName:inputS.value,serverContent:this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }

}
