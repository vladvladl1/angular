import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/models/note';
import { NoteService } from '../shared/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes?: Note[];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getData();
    this.noteService.addNote({id:1, title:"star wars"});
  }

  async getData() {
     this.notes =await this.noteService.getNotes();
  }
  


}
