import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Note } from '../models/note';


@Injectable({
  providedIn: 'root',
})
export class NoteService {



  constructor(private http: HttpClient) { }

  getNotes() {
    return firstValueFrom(this.http.get<Note[]>("https://jsonplaceholder.typicode.com/todos"));
  }

  getNote(id: number) {

    return firstValueFrom(this.http.get<Note>(`https://jsonplaceholder.typicode.com/todos/${id}`));
  }

  addNote(note: Note) {
    return firstValueFrom(this.http.post("https://jsonplaceholder.typicode.com/todos", note));
  }



  // removeNote(id: number) {
  //   this.notes = this.notes.filter((note) => note.id !== id);
  // }

  // addNote(title: string) {
  //   this.notes.push({
  //     id: Math.max(...this.notes.map((n) => n.id)) + 1,
  //     title,
  //   });
  // }
}
