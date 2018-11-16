# template approach for form
* import FormsModule in app.module.ts
* add ngModel name="whatever" to elements
* add (ngSubmit)="onSubmit(f)" #f="ngForm" on the form tag
* alternative to above we can have :
  *  "<form (ngSubmit)="onSubmit()" #f="ngForm">"
  *  @ViewChild('f') signupForm: NgForm;
* use one way binding on any element by [ngModel]="whatever value we set in typescript file"
* Grouping
  * use the ngModelGroup="name" 