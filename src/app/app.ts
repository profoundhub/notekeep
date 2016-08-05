import { Component } from '@angular/core';
import { MainContainers } from './containers';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
  moduleId: module.id,
  selector: 'app',
  directives: [MainContainers, ...ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS],
  templateUrl: './app/app.component.html'
})

export class App {}
