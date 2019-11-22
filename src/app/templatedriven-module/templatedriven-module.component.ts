import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templatedriven-module',
  templateUrl: './templatedriven-module.component.html',
  styleUrls: ['./templatedriven-module.component.css']
})
export class TemplatedrivenModuleComponent implements OnInit {
  @ViewChild('f', { static: false }) signUpForm: NgForm;
  defaultquestion = 'teacher';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    gender: ''
  };
  submitted = false;
  message: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  ngOnInit() {

  }
  onSub(form: NgForm) {
     console.log(form);
   }

  onSubmit() {

    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.gender;
    this.signUpForm.reset();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.setMessage();
  }
}
