import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{

  // Mock Data
  employees: Employee[];
  employeeToDisplay: Employee;
  private arrayIndex: number = 1;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  nextEmployee():void {
    if(this.arrayIndex <= this.employees.length-1)
    {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
      return;
    }
    this.employeeToDisplay = this.employees[0];
    this.arrayIndex = 1;
  }
}
