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
  branchName: string = '';
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
      this.branchName = params['branchName']; // Assuming you have branchName parameter
      this.isEditing = params['edit'] === 'edit';
      this.loadStudentDetails();
    });
  }

  loadStudentDetails() {
    this.student = this.engineeringService.getStudentByIdAndBranch(this.studentId, this.branchName);
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
