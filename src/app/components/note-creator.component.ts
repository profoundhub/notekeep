import { Component, Output, EventEmitter } from '@angular/core';
import { ColorPickr } from '../ui/color-picker';

@Component ({
  selector: 'note-creator',
  directives: [ColorPickr],
  styleUrls: ['app/components/note-creator-styles.css'],
  templateUrl: 'app/components/note-creator.component.html'
})

export class NoteCreator {
    @Output() createNote = new EventEmitter();

    colors: Array<string> = [
      '#320E3B', '#7F96FF', '#E56399',
      '#A6CFD5', '#71A9F7', '#DBFCFF',
      '#6B5CA5', '#C6D8FF', '#72195A',
      '#4C1036' 
    ];

    newNote = {
      title: '',
      value: ''
    };

    fullForm: boolean = false;

    onCreateNote() {
      // console.log("Submit + Done");
      const { title, value } = this.newNote;

      if (title && value) {
          this.createNote.next({title, value});
          this.resetCreator();
      }
    }

    resetCreator() {
      this.newNote = {
        title: '',
        value: ''
      }
    }

    toggle(value:boolean) {
      this.fullForm = value;
    }

}
