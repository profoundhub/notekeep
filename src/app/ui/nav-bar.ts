import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
  moduleId: module.id,
  selector: 'navi-bar',
  directives: [...ROUTER_DIRECTIVES],
  styleUrls: ['app/ui/style.ui.css'],
  templateUrl: 'app/ui/navibar.html'
})

export class NaviBar { }
