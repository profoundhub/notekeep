import { Component } from '@angular/core';
import { NoteCard } from '../ui/notecards';

@Component ({
  moduleId: module.id,
  directives: [NoteCard],
  selector: 'notes-container',
  styleUrls: ['app/containers/notes-container.css'],
  templateUrl: 'app/containers/notes-container.html'
})

export class Notes {
  notes = [
    {title: 'Add New Note', value: 'Note Details', color: 'coral'},
    {title: 'Add New Note', value: 'Note Details', color: 'coral'},
    {title: 'Add New Note', value: 'Note Details', color: 'coral'}
  ]

  onNoteChecked(note) {
    console.log(note);
  }

}
