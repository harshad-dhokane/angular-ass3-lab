import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent }
];
