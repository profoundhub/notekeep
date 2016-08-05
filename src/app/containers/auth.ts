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
    email: '',
    password: ''
  };

  mode: string = 'signin';
  modeText: string;
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
