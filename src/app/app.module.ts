import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   
import { RouterModule } from '@angular/router';   

import { AppComponent } from './app.component';
import { BranchComponent } from './branch/branch.component';
import { StudentComponent } from './student/student.component';
import { EngineeringService } from './engineering.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]) 
   
  ],
  providers: [EngineeringService],
  bootstrap: [AppComponent]
})
export class AppModule {}
