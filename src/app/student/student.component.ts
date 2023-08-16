// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { EngineeringService } from '../engineering.service';
// import { Student } from '../student.model';

// @Component({
//   selector: 'app-student',
//   templateUrl: './student.component.html',
//   styleUrls: ['./student.component.css']
// })
// export class StudentComponent implements OnInit {
//   studentId!: number;
//   student: Student | undefined;
//   isEditing: boolean = false;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private engineeringService: EngineeringService
//   ) {}

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       this.studentId = +params['studentId'];
//       this.loadStudentDetails();
//     });
//   }

//   loadStudentDetails() {
//     this.student = this.engineeringService.getStudentById(this.studentId);
//   }

//   viewStudent() {
//     this.isEditing = false;
//     this.loadStudentDetails();
//   }

//   editStudent() {
//     this.isEditing = true;
//   }

//   saveEditedStudent() {
//     // Implement logic to save edited student details
//     // Update the student's information
//     this.isEditing = false;
//   }

//   cancelEdit() {
//     this.isEditing = false;
//     this.loadStudentDetails(); // Reload the original student details
//   }

//   deleteStudent() {
//     this.engineeringService.deleteStudent(this.studentId);
//     this.router.navigate(['/branches', this.student?.branch]);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineeringService } from '../engineering.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentId!: number;
  student: Student | undefined;
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private engineeringService: EngineeringService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = +params['studentId'];
      this.isEditing = params['edit'] === 'edit';
      this.loadStudentDetails();
    });
  }

  loadStudentDetails() {
    this.student = this.engineeringService.getStudentById(this.studentId);
  }

  editStudent() {
    this.isEditing = true;
  }

  saveEditedStudent() {
    if (this.student) {
      this.engineeringService.updateStudent(this.student);
      this.isEditing = false;
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.loadStudentDetails();
  }

  deleteStudent() {
    if (this.student) {
      const branchName = this.student.branch;
      this.engineeringService.deleteStudent(this.student.id);
      this.router.navigate(['/branches', branchName]);
    }
  }
}
