import { Component } from '@angular/core';
import { NaviBar } from '../ui';

@Component ({
  selector: 'main-container',
  directives: [NaviBar],
  templateUrl: 'app/containers/main.containers.html'
})

export class Main { }
