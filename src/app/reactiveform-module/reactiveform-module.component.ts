import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactiveform-module',
  templateUrl: './reactiveform-module.component.html',
  styleUrls: ['./reactiveform-module.component.css']
})
export class ReactiveformModuleComponent implements OnInit {
  // username = new FormControl('');
  // Email = new FormControl('');

  gender = new FormControl('male');
  signupForm: FormGroup;
//  user = {
//     username: '',
//     email: '',
//     gender: ''
//  };
  genders = ['male', 'female'];

  constructor() { }

  ngOnInit() {
   this.signupForm = new FormGroup({
     userData: new  FormGroup({
      username : new FormControl('', Validators.required),
      Email : new FormControl('', [Validators.required, Validators.email]),

     }),
    gender : new FormControl('male'),
    hobbies : new FormArray([])

   });
  }
  onsubmit() {
console.log(this.signupForm);
  }

  onAddhobbies() {
// tslint:disable-next-line: no-angle-bracket-type-assertion
(<FormArray> this.signupForm.get('hobbies')).push(new FormControl('', Validators.required));
  }
  // updateName() {
  //   this.username.setValue('Nancy');
  // }

//   onsubmit() {
//  this.user.username = this.username.value;
//  this.user.email = this.Email.value;
//  this.user.gender = this.gender.value;
//   }


}
