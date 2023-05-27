import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  [x: string]: any;

  //url = "http://localhost:8080/api/restraunt";

  url ="https://localhost:7184/api/Restaurant";

  constructor(private http: HttpClient) {}

   getData(){
    return this.http.get(this.url).pipe(catchError(this.handleError));
   }

   private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
      (errorMessage = `Backend returned code ${error.status}, body was: `),
        error.error;
    }
    errorMessage += 'Something bad happened; please try again later.';
    return throwError(() => new Error(errorMessage));
  }
}
