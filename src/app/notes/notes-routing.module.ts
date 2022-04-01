import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotePageComponent } from './note-page/note-page.component';
import { NotesComponent } from './notes.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: ':id', component: NotePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
