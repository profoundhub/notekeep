import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'note-creator',
// directives: [NaviBar, Notes],
  styleUrls: ['app/components/note-creator.component.styles.css'],
  templateUrl: 'app/components/note-creator.component.html'
})

export class NoteCreator {
    @Output() createNote = new EventEmitter();

    newNote = {
      title: '',
      value: ''
    };

    onCreateNote() {
      // console.log("Submit + Done");
      const { title, value } = this.newNote;

      if (title && value) {
          this.createNote.next({title, value})
      }
    }
}
