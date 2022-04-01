import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotePageComponent } from './note-page/note-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotesComponent, NotePageComponent],
  imports: [CommonModule, NotesRoutingModule, FormsModule],
})
export class NotesModule {}
