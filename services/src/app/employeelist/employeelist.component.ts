import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  template: `
  <h2>
    Employee List from service 
  </h2>
  <ul *ngFor="let employee of employees">
   <li>{{employee.name}}</li>

  </ul>

  <h2>
    Employee List from HTTPS
  </h2>
  <h2>
    {{errorMsg}}
  </h2>
  
  <ul *ngFor="let employe of employeeshttp">
   <li>{{employe.name}}</li>

  </ul>

`
  ,
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees = []
  public employeeshttp = []
  public errorMsg = ""


  constructor(private _employeeservice : EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeservice.getemployee()
    this._employeeservice.getemployeehttp()
        .subscribe(data => this.employeeshttp = data
          ,error=>this.errorMsg = error);
        
  }

}
