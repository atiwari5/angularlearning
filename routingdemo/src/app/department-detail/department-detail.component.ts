import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
    You Selected departemnt with id = {{departmentID}}
    </h3>

    <a (click)="onClickPrev()">Previous</a>
    <a (click)="onClickNext()">Next</a>

    <div> 
    <button (click)="onClickBack()">Back</button> 
    </div>
    `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID ;

  constructor(private route : ActivatedRoute , private router : Router) { }

  ngOnInit(){
    //let id = parseInt(this.route.snapshot.paramMap.get('id') )
    //this.departmentID = id;
    this.route.paramMap.subscribe((_params : ParamMap) => {
      let id = parseInt(_params.get('id'))
    this.departmentID = id;
    });
  }

  onClickPrev(){
    let prevId = this.departmentID -1 
    this.router.navigate(['/departments',prevId])

  }

  onClickNext(){
    
    let nextId = this.departmentID + 1 
    this.router.navigate(['/departments',nextId])
  }

  onClickBack(){
    let currentID = this.departmentID
    this.router.navigate(['/departments',{id:currentID}])
  }
}
