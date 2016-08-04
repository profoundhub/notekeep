import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'color-pickr',
  styleUrls: ['app/ui/color-picker.css'],
  templateUrl: 'app/ui/color-picker.html'
})

export class ColorPickr {
  @Input() colors: Array<string> = [];
  @Output() selected = new EventEmitter();
  isSelectorVisible: boolean = false;

  showSelector(value: boolean) {
    this.isSelectorVisible = value;
  }

  selectColor(color) {
    this.showSelector(false);
    this.selected.next(color);
  }

}
