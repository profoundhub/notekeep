import { Component, Input } from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'note-card',
  styleUrls: ['app/ui/note-card.css'],
  templateUrl: 'app/ui/note-card.html'
})

export class NoteCard {
  // note = {title: 'Title of Note', value: 'Check eMail'}
  @Input() note = {}
  showChecked: boolean = false;

  toggle() {
    this.showChecked = !this.showChecked;
  }

  onChecked() {
    console.log("clicked")
  }
}
