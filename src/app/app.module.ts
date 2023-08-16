
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { BranchComponent } from './branch/branch.component';
// import { EngineeringService } from './engineering.service';
// import { FormsModule } from '@angular/forms';
// import { StudentComponent } from './student/student.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     BranchComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     RouterModule.forRoot([
//       { path: '', component: HomeComponent },
//   { path: 'branches/:branchName', component: BranchComponent },
//   { path: 'branches/:branchName/view/:studentId', component: BranchComponent },
//   { path: 'branches/:branchName/edit/:studentId', component: BranchComponent },
//   { path: 'branches/:branchName/student/:studentId', component: StudentComponent }, 
//   { path: 'branches/:branchName/student/:studentId/edit', component: StudentComponent },
//     ])
//   ],
//   providers: [EngineeringService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BranchComponent } from './branch/branch.component';
import { StudentComponent } from './student/student.component';
import { EngineeringService } from './engineering.service'; // Import the service
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BranchComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Add the AppRoutingModule here
  ],
  providers: [EngineeringService], // Provide the service
  bootstrap: [AppComponent]
})
export class AppModule { }
