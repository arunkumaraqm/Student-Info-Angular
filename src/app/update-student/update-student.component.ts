import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  public student: Student;
  public originalStudent: Student;
  constructor(private studentService: StudentService, private router: Router) { 
     this.originalStudent = this.studentService.getStudentNeedsUpdating();
     this.student = Object.assign({}, this.originalStudent);

  }

  ngOnInit(): void {
  }

  updateStudent(){
    this.originalStudent.copy(this.student);
    return true;
  }

  redirect(){
    this.router.navigate(['/', 'datatable']);
  }


}
