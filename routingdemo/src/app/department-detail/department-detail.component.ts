import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
    You Selected departemnt with id = {{departmentID}}
    </h3>

    <p>
    <button (click)='OnClickOverview()'>Overview</button>
    <button (click)='OnClickContacts()'>Contacts</button>
    </p>
    <router-outlet></router-outlet>
    
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
    // absolute path
    //this.router.navigate(['/departments',prevId])
    // Relative path
    this.router.navigate(['../', prevId] , {relativeTo: this.route});
  }

  onClickNext(){
    
    let nextId = this.departmentID + 1 
   //absolute path
   
   // this.router.navigate(['/departments',nextId])
  // Relative path 
  this.router.navigate(['../' , nextId] , {relativeTo: this.route})
  }

  onClickBack(){
    let currentID = this.departmentID
   // absolute path
    // this.router.navigate(['/departments',{id:currentID}])

    // relative path 
    this.router.navigate(['../', {id:currentID}] , {relativeTo : this.route})
  }

  OnClickOverview(){
    this.router.navigate(['overview'] , {relativeTo : this.route})
  }

  OnClickContacts(){
    this.router.navigate(['contact'] , {relativeTo : this.route})
  }  
}
