
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { BranchComponent } from './branch/branch.component';
// import { StudentComponent } from './student/student.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'branches/:branchName', component: BranchComponent },
//   { path: 'branches/:branchName/view/:studentId', component: BranchComponent },
//   { path: 'branches/:branchName/edit/:studentId', component: BranchComponent },
//   { path: 'branches/:branchName/student/:studentId', component: StudentComponent },
//   { path: 'branches/:branchName/student/:studentId/edit', component: StudentComponent }, // Ensure this route is defined
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BranchComponent } from './branch/branch.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'branches/:branchName', component: BranchComponent },
  { path: 'branches/:branchName/student/:studentId', component: StudentComponent },
  { path: 'branches/:branchName/student/:studentId/edit', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
