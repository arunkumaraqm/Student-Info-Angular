import { Injectable } from '@angular/core';
// import * as internal from 'stream';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student [];
  private idxStudentNeedsUpdating = -1;
  constructor() {  
    this.students = [
    new Student('c', 4),
    new Student('b', 5),
    new Student('a', 6),
  ]
    // this.students.push(new Student("bob"));
  }
  getStudents() {
    console.log("from get", this.students);    return this.students;


  }
  createStudent(student: Student){
    this.students.push(student); 
    console.log("from creats", this.students);
    return true;
  }

  setIdxStudentNeedsUpdating(idx: any){
    this.idxStudentNeedsUpdating = idx;
  }

  getStudentNeedsUpdating(){
    return this.students[this.idxStudentNeedsUpdating];
  }
}
