import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName=this.server.getAppName();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private server: ServerService) { }
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave() {
    this.server.storeServers(this.servers).subscribe(
      (response) => {
        console.log("---", response);

      },
      (error) => {
        console.log("error ", error);
      }

    );
  }
  onGet() {
    // this.server.getServers().subscribe(

    //   (response: Response) => {
    //     //  console.log("---get", response);
    //     const data = response.json();
    //     console.log("-----", data);

    //   },
    //   (error) => {
    //     console.log("error ", error);
    //   }

    // );
    this.server.getServers().subscribe(

      (servers: any []) => {
        //  console.log("---get", response);
       // const data = response.json();
       this.servers=servers;
        console.log("-----", servers);

      },
      (error) => {
        console.log("error ", error);
      }

    );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
