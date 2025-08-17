import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students';
import {NotepadComponent} from './notepad/notepad'

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'notepad', component: NotepadComponent }
];
