import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // FormGroup object
  myForm: FormGroup;

  // Add the FormGroup object
  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      // Defalut field values and validators
      userName: ['', [
        Validators.required
      ]],
      passWord: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!?@#$%^&+=])([a-zA-Z0-9!?@#$%^&+=]+){8,}$')
      ]]
    });

    // Subscribe to form changes.
    this.myForm.valueChanges.subscribe(console.log);
  }

  // Formfield getters
  get userName() {
    return this.myForm.get('userName');
  }

  get passWord() {
    return this.myForm.get('passWord');
  }
}
