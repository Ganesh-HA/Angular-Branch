
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { BranchComponent } from './branch/branch.component';
// import { StudentComponent } from './student/student.component';
// import { EngineeringService } from './engineering.service'; // Import the service
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     BranchComponent,
//     StudentComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     AppRoutingModule, // Add the AppRoutingModule here
//   ],
//   providers: [EngineeringService], // Provide the service
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';
import { BranchComponent } from './branch/branch.component';
import { StudentComponent } from './student/student.component';
import { EngineeringService } from './engineering.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: 
  [
    AppComponent,
    HomeComponent,
     BranchComponent, 
     StudentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Add FormsModule
    RouterModule.forRoot([]) // Set up your routes here
  ],
  providers: [EngineeringService],
  bootstrap: [AppComponent]
})
export class AppModule {}
