import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../../../models/payment.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  Host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.Host}/payments`);
  }

  // Save Payment with FormData:
  savePayment(formData: FormData): Observable<Payment> {
    return this.http.post<Payment>(`${this.Host}/payments`, formData);
  }


  // get Details Payment :
  getDetailsPayment(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.Host}/paymentFile/${id}`, {responseType: 'blob' as 'json',});

  }
}
