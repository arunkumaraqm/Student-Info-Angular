import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DatatableComponent } from './datatable/datatable.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path: 'datatable', component: DatatableComponent},
  { path: 'new', component: CreateStudentComponent},
  { path: 'edit', component: UpdateStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
