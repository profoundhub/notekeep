import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'auth-container',
  directives: [...FORM_DIRECTIVES],
  styleUrls: ['./app/containers/auth.css'],
  templateUrl: './app/containers/auth.html'
})

export class Auth {
  user = {
    password: '',
    email: ''
  };

  mode: string = 'sign-in';
  linkText: string = 'Don\'t have an account?';

  constructor(private auth: AuthService, private router: Router) {}

  changeMode() {
    if (this.mode === 'sign-in') {
      this.mode = 'sign-up'
      this.linkText = 'Already have an Account?'
    } else {
      this.mode = 'sign-in';
      this.linkText = 'Don\'t have an Account?';
    }
  }

  authenticate() {
    this.auth.authenticate(this.mode, this.user)
    .subscribe(() => this.router.navigate(['']))
  }

}
