import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit
  , AfterContentChecked,
  AfterViewInit, AfterViewChecked {
  @Input('srv') element: { type: string, name: string, content: string };
  constructor() {
    console.log("constructor")
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(" ngOnChanges")
    console.log(changes);

  }

  ngOnInit() {
    console.log("ngOnInit")
  }
  ngDoCheck() {
    console.log("ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(){
    console.log("destroy")
  }

}
