import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineeringService } from '../engineering.service';
import { Student } from '../student.model';
import { HttpClient } from '@angular/common/http';

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
    private engineeringService: EngineeringService,
    private http:HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = +params['studentId'];
      this.branchName = params['branchName']; 
      this.isEditing = params['edit'] === 'edit';
      
    });
    this.fetchStudents();
    this.addStudent;
    this.deleteStudent();
    this.saveEditedStudent();
  }

  async fetchStudents(){
    try {
      const response=await this.http.get<any>(`http://localhost:8080/branches/${this.branchName}/student/${this.studentId}`).toPromise();
      console.log(response);
      
      this.student=response;
    } catch (error){
      console.log(error);
      
    }
  }
  
  editStudent() {
    this.isEditing = true;
  }

  Student() {
    this.isEditing = true;
  }
  
  
  async saveEditedStudent() {
    if (this.student) {
      try {
        const response = await this.http.put<any>(`http://localhost:8080/students/${this.student.id}/edit`, this.student).toPromise();
        console.log(response);
        this.isEditing = false;
      } catch (error) {
        console.log(error);
      }
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }

  async deleteStudent() {
    if (this.student) {
      try {
        const response = await this.http.delete<any>(`http://localhost:8080/students/${this.student.id}/delete`).toPromise();
        console.log(response);
        const branchName = this.student.branch;
        this.router.navigate(['/branches', branchName]);
      } catch (error) {
        console.log(error);
      }
    }
  }


  
  async addStudent(newStudent: Student) {
    try {
      const response = await this.http.post<any>('http://localhost:8080/students/add', newStudent).toPromise();
      console.log(response);
      // Optionally, you can navigate to the branch page after adding
      this.router.navigate(['/branches', newStudent.branch]);
    } catch (error) {
      console.log(error);
    }
  }
  
}


