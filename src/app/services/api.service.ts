import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Report } from '../classes/report';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL = 'https://newpdfgenerator.herokuapp.com/api';
  id: Number;

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  reportid = String(localStorage.getItem("reportid"));

  private reportID = new BehaviorSubject<any>({
    id: this.reportid
  });

  // setNewReportInfo(id: any) {
  //   this.reportID.next(id);
  // }

  // getNewReportInfo() {
  //   return this.reportID.asObservable();
  // }

  getAllReports(): Observable<Report[]>{
    return this.http.get<Report[]>(this.apiURL+'/reports/').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getReports(id): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiURL+'/reports/'+ id).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
