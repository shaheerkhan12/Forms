import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Myproject';
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {

        // tslint:disable-next-line: prefer-const
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/templatedriven';

        this.router.navigateByUrl(redirect);
      }
    });
  }

  reactivedriven() {
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {

        // tslint:disable-next-line: prefer-const
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/reactiveform';
        this.router.navigateByUrl(redirect);
      }
    });
}
  logout() {
    this.authService.logout();
    this.setMessage();

  }
}
