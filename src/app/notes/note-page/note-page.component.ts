import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../../shared/models/note';
import { NoteService } from '../../shared/services/note.service';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss'],
})
export class NotePageComponent implements OnInit {
  note?: Note | null;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    const noteId = this.route.snapshot.paramMap.get('id');
    this.note =await this.noteService.getNote(Number(noteId));
  }


}
