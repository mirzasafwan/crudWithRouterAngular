import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empl: Employee = new Employee();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeServiceService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const employeeId = Number(params.get('id'));
      this.employeeService.getEmployeeById(employeeId).subscribe(
        (employee) => {
          this.empl = employee;
        },
        (error) => {
          console.error('Error fetching employee data: ', error);
        }
      );
    });
  }

  updateEmployee() {
    this.employeeService.updateEmployeeById(this.empl).subscribe(
      (res) => {
        console.log('Employee updated successfully.' + res);
        this.router.navigate(['allemp']);
      },
      (error) => {
        console.error('Error updating employee: ', error);
        alert('Cannot Update Data');
      }
    );
  }
}
