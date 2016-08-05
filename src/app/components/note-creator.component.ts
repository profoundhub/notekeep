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

    colors: Array<string> = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#FF5252', '#FF4081', '#E040FB', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC'];

    newNote = {
      userId: '',
      title: '',
      value: '',
      color: 'white'
    };

    fullForm: boolean = false;

    onColorSelect(color: string) {
      this.newNote.color = color;
    };

    onCreateNote() {
      // console.log("Submit + Done");
      const { userId, title, value, color } = this.newNote;

      if (title && value) {
          this.createNote.next({userId, title, value, color});
          this.resetCreator();
      }
    }

    resetCreator() {
      this.newNote = {
        userId: '',
        title: '',
        value: '',
        color: 'white'
      }
    }

    toggle(value:boolean) {
      this.fullForm = value;
    }
}
