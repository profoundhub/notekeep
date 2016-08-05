import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FORM_DIRECTIVES } from '@angular/forms';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'auth-container',
  directives: [...FORM_DIRECTIVES],
  styleUrls: ['./app/containers/auth.css'],
  templateUrl: './app/containers/auth.html'
})

export class Auth {
  user = {
    userId: '',
    email: '',
    password: ''
  };

  mode: string = 'signin';
  modeText: string = 'sign-up';
  linkText: string = 'Don\'t have an account?';

  constructor(private authService: AuthService, private router: Router) {}

  changeMode() {
    if (this.mode === 'signin') {
      this.mode = 'signup'
      this.modeText = 'sign-up'
      this.linkText = 'Already have an Account?'
    } else {
      this.mode = 'signin';
      this.modeText = 'sign-in';
      this.linkText = 'Don\'t have an Account?';
    }
  }

  authenticate() {
    this.authService.authenticate(this.mode, this.user)
    .subscribe(() => this.router.navigate(['']))
  }
}
