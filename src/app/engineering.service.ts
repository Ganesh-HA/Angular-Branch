

// import { Injectable } from '@angular/core';
// import { Student } from './student.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class EngineeringService {
//   updateStudent(student: Student) {
//     throw new Error('Method not implemented.');
//   }
 
//   private students: Student[] = [
//     { id: 1, name: 'Student A', age: 20, phoneNumber: '1234567890', address: 'Address A', bloodGroup: 'O+', branch: 'ECE' },
//     { id: 2, name: 'Student AB', age: 20, phoneNumber: '1234567890', address: 'Address A', bloodGroup: 'O+', branch: 'ECE' },
//     { id: 2, name: 'Student B', age: 21, phoneNumber: '9876543210', address: 'Address B', bloodGroup: 'A-', branch: 'CSE' },
//     { id: 3, name: 'Student C', age: 22, phoneNumber: '3216547890', address: 'Address C', bloodGroup: 'A+', branch: 'EEE' },
//     // ...
//   ];

//   constructor() {}

//   getStudentById(studentId: number): Student | undefined {
//     return this.students.find(student => student.id === studentId);
//   }

//   getStudentsByBranch(branchName: string): Student[] {
//     return this.students.filter(student => student.branch === branchName);
//   }

//   deleteStudent(studentId: number): void {
//     const index = this.students.findIndex(student => student.id === studentId);
//     if (index !== -1) {
//       this.students.splice(index, 1);
//     }
//   }

// }



import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class EngineeringService {
  private students: Student[] = [
    { id: 1, name: 'Student A', age: 20, phoneNumber: '1234567890', address: 'Address A', bloodGroup: 'O+', branch: 'ECE' },
    { id: 2, name: 'Student AB', age: 23, phoneNumber: '5123456789', address: 'Address AB', bloodGroup: 'B+', branch: 'ECE' },
    { id: 1, name: 'Student B', age: 21, phoneNumber: '9876543210', address: 'Address B', bloodGroup: 'A-', branch: 'CSE' },
    { id: 3, name: 'Student C', age: 22, phoneNumber: '3216547890', address: 'Address C', bloodGroup: 'A+', branch: 'EEE' },
    // ... More student data
  ];

  getStudentsByBranch(branchName: string): Student[] {
    return this.students.filter(student => student.branch === branchName);
  }

  getStudentById(studentId: number): Student | undefined {
    return this.students.find(student => student.id === studentId);
  }

  //   deleteStudent(studentId: number): void {
  //   const index = this.students.findIndex(student => student.id === studentId);
  //   if (index !== -1) {
  //     this.students.splice(index, 1);
  //   }
  // }

  deleteStudent(studentId: number) {
    this.students = this.students.filter(student => student.id !== studentId);
  }

  updateStudent(updatedStudent: Student) {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }
  // Implement methods for editing, saving, and deleting students
}

