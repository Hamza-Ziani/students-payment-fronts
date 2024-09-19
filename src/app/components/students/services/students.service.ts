import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../../../models/students.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Payment } from '../../../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }


  getAllStudents() : Observable<Students []> {
    return this.http.get<Students []>(`${environment.apiUrl}/students`);
  }

  getStudentByCode(code : String) : Observable<Payment[]> {
    return this.http.get<Payment[]>(`${environment.apiUrl}/students/${code}/payments`);
  }
}
