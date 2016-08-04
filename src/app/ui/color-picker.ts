import { Component, Input } from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'color-pickr',
  styleUrls: ['app/ui/color-picker.css'],
  templateUrl: 'app/ui/color-picker.html'
})

export class ColorPickr {
  @Input() colors: Array<string> = [];

  isSelectorVisible: boolean = false;

  showSelector(value: boolean) {
    this.isSelectorVisible = value;
  }
}
