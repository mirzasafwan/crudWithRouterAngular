import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  emp: Employee = new Employee();

  constructor(private addservice: EmployeeServiceService,
    private router: Router) { }
  addEmployee() {
    this.addservice.addEmployeeList(this.emp).subscribe((employee) => {
      console.log("Successfully Added Employee" + employee)
      this.router.navigate(['allemp'])
    }, err => {
      alert('No Employee Added')
    })
  }
}
