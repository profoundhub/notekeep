import { Component } from '@angular/core';
import { NoteCard } from '../ui/notecards';
import { NoteCreator } from '../components/note-creator.component';
import { NoteService } from '../services';

@Component ({
  moduleId: module.id,
  directives: [NoteCard, NoteCreator],
  selector: 'notes-container',
  styleUrls: ['app/containers/notes-container.css'],
  templateUrl: 'app/containers/notes-container.html'
})

export class Notes {
  notes = [
    {title: 'Add New Note', value: 'Note Details', color: 'coral'},
    {title: 'Add New Note', value: 'Note Details', color: 'lightblue'},
    {title: 'Add New Note', value: 'Note Details', color: 'azure'}
  ];

  constructor(privat noteService:NoteService) {}

  onNoteChecked(note, i) {
    this.notes.splice(i, 1);
  };

  onCreateNote(note) {
    this.notes.push(note);
  }
}
