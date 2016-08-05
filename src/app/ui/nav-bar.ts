import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from '../services';

@Component ({
  moduleId: module.id,
  selector: 'navi-bar',
  directives: [...ROUTER_DIRECTIVES],
  styleUrls: ['app/ui/style.ui.css'],
  templateUrl: 'app/ui/navibar.html'
})

export class NaviBar {
  constructor(private authService: AuthService) {}

  signout() {
    this.authService.signout();
  }
}
