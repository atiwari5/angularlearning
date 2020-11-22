import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetail',
  template: `
  <h2> Here is full details </h2> 
  <ul *ngFor= "let employee of employees">
    <li >{{employee.id }} {{employee.name}} - {{employee.age}}</li>
       
</ul>
<h2> Here is full details from http </h2> 
  <ul *ngFor= "let employe1 of employeehttp">
    <li >{{employe1.id }} {{employe1.name}} - {{employe1.age}}</li>
       
</ul>

`,
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  public employees = [];
  public employeehttp = [];

  constructor(private _employeeservice : EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeservice.getemployee()
    this._employeeservice.getemployeehttp()
      .subscribe(data => this.employeehttp = data)
  }

}
