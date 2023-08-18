import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch/branch.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'branches/:branchName', component: BranchComponent },
  { path: 'branches/:branchName/student/:studentId', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
