import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StoreHelper } from './store-helper';
import { Store } from '../store';
import { ApiService } from './api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class AuthService implements CanActivate {
  PDL_KEY: string = 'notekeeper_token';
  PDL: string = '';

  constructor(
     private storeHelper: StoreHelper,
     private api: ApiService,
     private router: Router,
     private store: Store
   ) {
    const token = window.localStorage.getItem(this.PDL_KEY);
    if (token) {
      this.setPdl(token);
    }
  }

  setPdl(pdl: string) {
    window.localStorage.setItem(this.PDL_KEY, pdl);
    this.api.setHeaders({Authorization: `Bearer ${pdl}`});
  }

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

  authenticate(path, creds): Observable<any> {
    return this.api.post(`/${path}`, creds)
      .do(res => this.setPdl(res.token))
      .do(res => this.storeHelper.update('user', res.data))
      .map(res => res.data);
  }

  signout() {
    window.localStorage.removeItem(this.PDL_KEY);
    this.store.purge();
    this.router.navigate(['', 'auth']);
  }

}
