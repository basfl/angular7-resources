# DATABINDING
* @input
    * where we recieve it @Input() number:number
    * parent : [number]="odd"
* @output 
    * where we send data  
        * @Output() intervalFired = new EventEmitter<number>()
        *  this.intervalFired.emit(this.startInterval + 1);
    * where we get data 
        * (intervalFired)="onIntervalFired($event)"
        *