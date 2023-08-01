// employee-services.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseUrl = "http://localhost:3000/user";
  // addUrl = "http://localhost:8080/api/v1/add";

  constructor(private httpclient: HttpClient) { }

  addEmployeeList(employee: Employee): Observable<Employee> {
    return this.httpclient.post<Employee>(`${this.baseUrl}`, employee);
  }

  getEmployee(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpclient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployeeById(emp: Employee): Observable<Employee> {
    return this.httpclient.put<Employee>(`${this.baseUrl}/${emp.id}`, emp);
  }
  deleteEmployeeById(id: any): Observable<Employee> {
    return this.httpclient.delete<Employee>(`${this.baseUrl}/${id}`);
  }
}
