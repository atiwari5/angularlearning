import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
    <h2>
      department-list Details
  </h2>
  <ul class="items">
    <li (click)="onselect(department)"  [class.selected]="isSelected(department)" *ngFor="let department of departmentlist">
      <span class="badge">{{department.id}}</span> {{department.name}}
    </li>  
  </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public deptSElectedId ; 
  public departmentlist = [
    {"id":1  , "name" : "Angualr"},
    {"id":2  , "name" : "Cobol"},
    {"id":3  , "name" : "AWS"},
    {"id":4  , "name" : "Azzure"},
    {"id":5  , "name" : "Spring"},
    {"id":6  , "name" : "C#"}, 
  ]
  constructor(private router : Router , private route : ActivatedRoute  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((_params : ParamMap) => {
      let id = parseInt(_params.get('id'))
    this.deptSElectedId = id;
    })
  }

  onselect(department){
    this.router.navigate(['/departments' , department.id])
  }

  isSelected(department){
    return department.id=== this.deptSElectedId.id

  }
}
