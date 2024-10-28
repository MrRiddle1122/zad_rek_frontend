import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private baseUrl = 'http://localhost:8080/currencies';

  constructor(private http: HttpClient) { }

  getCurrencyValue(currency: string, name: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/get-current-currency-value-command`, { currency, name });
  }

  getAllRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/requests`);
  }
}
