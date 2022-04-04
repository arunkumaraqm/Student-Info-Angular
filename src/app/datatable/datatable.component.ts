import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  public listOfStudents!: Student [];

  constructor(private studentService: StudentService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.listOfStudents = this.studentService.getStudents();
  }

  deleteStudent(i: any) {
    this.listOfStudents.splice(i, 1);
  }

  editStudent(i: any){
    this.studentService.setIdxStudentNeedsUpdating(i);
    this.router.navigate(['/', 'edit']);

  }

}
