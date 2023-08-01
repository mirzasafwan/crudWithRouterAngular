import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [

  { path: "allemp", component: EmployeeListComponent },
  { path: "add", component: AddEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: '', redirectTo: '/allemp', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
