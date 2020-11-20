import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  template: `
  <h2>
    Employee List
  </h2>
  <ul *ngFor="let employee of employees">
   <li>{{employee.name}}</li>

  </ul>
  `
  ,
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees = [
    {"id": 1 , "name" : "Amit" , "age" : 40},
    {"id": 2 , "name" : "Shrey" , "age" : 20},
    {"id": 3 , "name" : "Maninder" , "age" : 30},
    {"id": 4 , "name" : "Sai" , "age" : 25},
    {"id": 5 , "name" : "Honey" , "age" : 35},
    {"id": 6 , "name" : "Ajay" , "age" : 36},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
