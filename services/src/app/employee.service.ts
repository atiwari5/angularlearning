import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError } from 'rxjs';
import { IEmployee } from 'src/assets/employee';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string = "assets/data/employee1s.json" ;

  constructor(private http : HttpClient) {

   }

  getemployee(){
    return  [ {"id": 1 , "name" : "Amit" , "age" : 40},
    {"id": 2 , "name" : "Shrey" , "age" : 20},
    {"id": 3 , "name" : "Maninder" , "age" : 30},
    {"id": 4 , "name" : "Sai" , "age" : 25},
    {"id": 5 , "name" : "Honey" , "age" : 35},
    {"id": 6 , "name" : "Ajay" , "age" : 36},
    ];
  }

 // getemployeehttp() : Observable<IEmployee[]>{
 //   return this.http.get<IEmployee[]>(this._url)
 //                   .catch(this.errorhandler);
 // }

    getemployeehttp() : Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url).pipe (
        map(data => {return <IEmployee[]>data;}),
        catchError((error: HttpErrorResponse) => {return throwError(error.message || 'Server Error')})
      ) 
    }


}
