
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EngineeringService } from '../engineering.service';
import { Student } from '../student.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  branchName: string = '';
  students: any[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private engineeringService: EngineeringService,
    private http:HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.branchName = params['branchName'];
    });

    this.fetchStudents();
  }

  async fetchStudents(){
    try {
      const response=await this.http.get<any[]>(`http://localhost:8080/branches/${this.branchName}`).toPromise();
      console.log(response);
      
      this.students=response;
    } catch (error){
      console.log(error);
      
    }
  }

}
