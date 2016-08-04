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
  note = {title: 'Add New Note', value: 'Note Details'}
}
