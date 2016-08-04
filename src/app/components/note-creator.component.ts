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

    colors: Array<string> = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#FF5252', '#FF4081', '#E040FB', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', /* '#B2EBF2', '#B2DFDB' */];
    /* ['#B60000', '#595959', '#534A12', '#B7003', '#006800', '#265D71', '#4B5165']; */
    /* ['#320E3B', '#7F96FF', '#E56399', '#A6CFD5', '#71A9F7', '#DBFCFF', '#6B5CA5', '#C6D8FF', '#72195A', '#4C1036']; */
    /* special thanks to https://material.google.com/style/color.html#color-color-palette */

    newNote = {
      title: '',
      value: '',
      color: 'white'
    };

    fullForm: boolean = false;

    onColorSelect(color:string) {
      this.newNote.color = color;
    }

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
        value: '',
        color: 'white'
      }
    }

    toggle(value:boolean) {
      this.fullForm = value;
    }

}
