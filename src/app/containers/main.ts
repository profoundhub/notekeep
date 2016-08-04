import { Component } from '@angular/core';
import { NaviBar } from '../ui';
import { Notes } from './notes';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
  selector: 'main-container',
  directives: [NaviBar, Notes, ...ROUTER_DIRECTIVES],
  styleUrls: [''],
  templateUrl: 'app/containers/main.containers.html'
})

export class Main { }
