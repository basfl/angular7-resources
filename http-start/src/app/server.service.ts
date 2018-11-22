import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ServerService {

  constructor(private http:Http) { 
  }

   storeServers(servers: any[]){
     const headers=new Headers({
      'Content-Type':'application/jason',


     });
     // this is just observable it is not sending post request untill something subscibe to it
    // return  this.http.post('https://udemy-ng-http-c09c3.firebaseio.com/data.json',servers,{
    //   headers:headers
    // });
    return  this.http.put('https://udemy-ng-http-c09c3.firebaseio.com/data.json',servers,{
      headers:headers
    });

   }
   getServers(){
     console.log("^^^^^^");
     return this.http.get('https://udemy-ng-http-c09c3.firebaseio.com/data.json').map(
      (response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      }
     ).catch(
       (error:Response)=>{
         console.log("error",error);
         return Observable.throw(error);
       }
     )
     
   }
   
   getAppName() {
    return this.http.get('https://udemy-ng-http-c09c3.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
