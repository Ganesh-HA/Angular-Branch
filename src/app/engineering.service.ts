import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})

export class EngineeringService {
  private students: Student[] = [
    // { id: 1, name: 'Student A', age: 20, phoneNumber: '1234567890', address: 'Address A', bloodGroup: 'O+', branch: 'ECE' },
    // { id: 2, name: 'Student AB', age: 23, phoneNumber: '5123456789', address: 'Address AB', bloodGroup: 'B+', branch: 'ECE' },
    // { id: 1, name: 'Student B', age: 21, phoneNumber: '9876543210', address: 'Address B', bloodGroup: 'A-', branch: 'CSE' },
    // { id: 1, name: 'Ganesh H A', age: 22, phoneNumber: '3216547890', address: 'Address C', bloodGroup: 'A+', branch: 'EEE' },
    // ... More student data
  ];


}

