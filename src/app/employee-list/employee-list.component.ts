import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  empArr: Employee[] = [];

  constructor(
    private employeeservice: EmployeeServiceService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeservice.getEmployee().subscribe(
      (res) => {
        this.empArr = res;
      },
      (err) => {
        console.error('Error fetching employee data: ', err);
      }
    );
  }
  deleteEmployee(id: any) {
    this.employeeservice.deleteEmployeeById(id).subscribe(
      () => {
        // Filter the deleted employee out of the array
        this.empArr = this.empArr.filter((emp) => emp.id !== id)
      }


    );

  }
  updateEmployee(id: any) {
    this.route.navigate(['update', id]);
  }
}
