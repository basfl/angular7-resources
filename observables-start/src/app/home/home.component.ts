import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { interval } from 'rxjs/observable/interval';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer'
import { Subscription } from 'rxjs/Rx';
//import { Subscription } from 'rxjs/Subscription';


/////////////////////////////////////////


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;




  constructor() { }

  ngOnInit() {
    //  const myNumbers=Observable.interval(1000).map(
    //    (data:number)=>{
    //     return data;
    //    }
    //  );
    //////////////////////////////////////////
    // const source = interval(1000);
    // const numbersObsSubscription = source.subscribe(val => console.log(val));
    /////////////////////////////////////////////////////////////
   const source= interval(1000).map(
      (data:number)=>{
        return data;
      }
    );
    this.numbersObsSubscription=source.subscribe(val=>console.log(val))
    //Observable.interval(1000);
    // const myNumbers = Observable.interval(1000)
    //   .map(
    //     (data: number) => {
    //       return data * 2;
    //     }
    //   );
    // this.numbersObsSubscription = myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    ////////////////////////////////////////////////////////////
    const myObservable = Observable.create((observer: Observer<string>) => {

      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);

    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );


  }
  ngOnDestroy() {
     this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
    console.log("ngonDestroy")

  }

}


