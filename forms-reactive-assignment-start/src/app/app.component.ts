import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomeValidator } from './custome-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  ngOnInit() {
    this.projectForm = new FormGroup({
      "projectName": new FormControl(null, [Validators.required, CustomeValidator.invalidProjectName], CustomeValidator.asyncInvalidProjectName),
      "email": new FormControl(null, Validators.email),
      "projectStatus": new FormControl("critical", [Validators.required, Validators.email])
    });
  }
  onSaveProject() {
    console.log("->", this.projectForm)

  }

}
