import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class AuthService implements CanActivate {
  PDL_KEY: string = 'retain_token';
  PDL: string = '';

  constructor(private router: Router) { }

  isAuthorized(): boolean {
    return Boolean(window.localStorage.getItem(this.PDL));
  }

  canActivate(): boolean {
    const isAuth = this.isAuthorized();

    if (!isAuth) {
      this.router.navigate(['', 'auth']);
    }

    return isAuth;
  }

}
