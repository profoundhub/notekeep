import { Component } from '@angular/core';
import { NaviBar } from '../ui';
import { Notes } from './notes';

@Component ({
  selector: 'main-container',
  directives: [NaviBar, Notes],
  templateUrl: 'app/containers/main.containers.html'
})

export class Main { }
