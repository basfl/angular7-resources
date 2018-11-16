import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowedNewServer = false;
  serverCreationStatus = "No Server created !!";
  serverName = "";
  serverCreated = false;
  servers = ["test1", "test2"]

  constructor() {
    setTimeout(() => { this.allowedNewServer = true }, 2000)
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreated = true
    this.serverCreationStatus = "Server was created !!! and the nane is " + this.serverName
  }
  onUpdateServername(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log("&&&&&&&&", event);

  }

}
