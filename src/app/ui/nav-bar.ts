import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

@Component ({
  moduleId: module.id,
  selector: 'navi-bar',
  providers: [HTTP_PROVIDERS],
  styleUrls: ['app/ui/style.ui.css'],
  templateUrl: 'app/ui/navibar.html'
})

export class NaviBar { }
