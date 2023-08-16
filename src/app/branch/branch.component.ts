// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { EngineeringService } from '../engineering.service';
// import { Student } from '../student.model';

// @Component({
//   selector: 'app-branch',
//   templateUrl: './branch.component.html',
//   styleUrls: ['./branch.component.css']
// })
// export class BranchComponent implements OnInit {
//   branchName: string = '';
//   students: Student[] = [];

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private engineeringService: EngineeringService
//   ) {}

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       this.branchName = params['branchName'];
//       this.students = this.engineeringService.getStudentsByBranch(this.branchName);
//     });
//   }

//   viewStudentDetails(student: Student) {
//     this.router.navigate(['/branches', this.branchName, 'view', student.id]);
//   }

//   editStudent(student: Student) {
//     this.router.navigate(['/branches', this.branchName, 'edit', student.id]);
//   }

//   deleteStudent(student: Student) {
//     this.engineeringService.deleteStudent(student.id);
//     this.students = this.engineeringService.getStudentsByBranch(this.branchName);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EngineeringService } from '../engineering.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  branchName: string = '';
  students: Student[] = [];
  router: any;

  constructor(
    private route: ActivatedRoute,
    private engineeringService: EngineeringService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.branchName = params['branchName'];
      this.students = this.engineeringService.getStudentsByBranch(this.branchName);
    });
  }

  //   viewStudentDetails(student: Student) {
  //   this.router.navigate(['/branches', this.branchName, 'view', student.id]);
  // }

  // editStudent(student: Student) {
  //   this.router.navigate(['/branches', this.branchName, 'edit', student.id]);
  // }

  // deleteStudent(student: Student) {
  //   this.engineeringService.deleteStudent(student.id);
  //   this.students = this.engineeringService.getStudentsByBranch(this.branchName);
  // }
}

