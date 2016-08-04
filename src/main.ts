import { bootstrap } from '@angular/platform-browser-dynamic';

import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@angular/router';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { App, providers, routes } from './app';

bootstrap(App, [
  ...HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provideRouter(routes),
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  ...providers
]);
