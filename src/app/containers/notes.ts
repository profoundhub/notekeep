import { Component } from '@angular/core';
import { NoteCard } from '../ui';
import { NoteCreator } from '../components/note-creator.component';
import { NoteService } from '../services';

@Component ({
  moduleId: module.id,
  selector: 'notes-container',
  directives: [NoteCard, NoteCreator],
  styleUrls: ['app/containers/notes-container.css'],
  templateUrl: 'app/containers/notes-container.html'
})

export class Notes {
  notes = [];

  constructor(private noteService:NoteService) {
    this.noteService.getNotes().subscribe(res => this.notes = res.data);
  }
  
  onNoteChecked(note, i) {
    this.notes.splice(i, 1);
  };

  onCreateNote(note) {
    this.noteService.createNote(note).subscribe(note => this.notes.push(note));
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
}
