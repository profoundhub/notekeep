import { Component, OnDestroy } from '@angular/core';
import { NoteCard } from '../ui';
import { NoteCreator } from '../components/note-creator.component';
import { NoteService } from '../services';
import { Store } from '../store';
import 'rxjs/Rx';

@Component ({
  moduleId: module.id,
  selector: 'notes-container',
  directives: [NoteCard, NoteCreator],
  styleUrls: ['app/containers/notes-container.css'],
  templateUrl: 'app/containers/notes-container.html'
})

export class Notes implements OnDestroy {
  notes = []

  constructor(
    private noteService: NoteService,
    private store: Store
  ) {
    this.store.changes.pluck('notes')
    .subscribe((notes: any) => this.notes = notes);

    this.noteService.getNotes().subscribe();
  }

  onNoteChecked(note) {
    this.noteService.completeNote(note).subscribe();
  }

  onCreateNote(note) {
    this.noteService.createNote(note).subscribe();
  }

  ngOnDestroy() {
    console.log('Destroyed!');
  }

}
