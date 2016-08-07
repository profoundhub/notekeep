import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'note-card',
  templateUrl: 'app/ui/note-card.html',
  styleUrls: ['app/ui/note-card.css']
})

export class NoteCard {
  @Input() note = {};
  @Output() checked = new EventEmitter();
  showChecked: boolean = false;

  toggleCheck() {
    this.showChecked = !this.showChecked;
  }

  onChecked() {
    this.checked.next(this.note);
  }
}
