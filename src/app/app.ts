import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Main } from './containers';

@Component ({
  moduleId: module.id,
  selector: 'app',
  directives: [Main],
  providers: [HTTP_PROVIDERS],
  templateUrl: './app/app.component.html'
})

export class App {}
