import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscriptions = "advance";
  @ViewChild('f') submitForm: NgForm;
  submitedInput = {
    pass: '',
    email: '',
    subscriptions: ''
  }
  submitted: boolean = false;
  onSubmit() {
    console.log("**", this.submitForm);
    this.submitedInput.email = this.submitForm.value.email;
    this.submitedInput.pass = this.submitForm.value.pass;
    this.submitedInput.subscriptions = this.submitForm.value.subscriptions;
    this.submitted = true;
    this.submitForm.reset();

  }

}
