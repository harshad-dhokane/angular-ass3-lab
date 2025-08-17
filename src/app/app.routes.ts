import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students';
import {NotepadComponent} from './notepad/notepad';
import { PuneStudentsComponent} from './pune-students/pune-students';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'notepad', component: NotepadComponent },
  { path: 'pune-students', component: PuneStudentsComponent }
];
