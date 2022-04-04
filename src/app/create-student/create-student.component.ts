import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public student: Student;
  constructor(private studentService: StudentService, private router: Router) { 
     this.student = new Student('', 0);
  }

  ngOnInit(): void {
  }

  createStudent(){
    let created = this.studentService.createStudent(this.student);
    return created;
  }

  redirect(){
    this.router.navigate(['/', 'datatable']);
  }


}
