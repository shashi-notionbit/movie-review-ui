import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { LoginResponse } from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:8000/api/register/";
  private loginUrl = "http://localhost:8000/api/login/";

  constructor(private http:HttpClient) { }

  registerUser(user:User):Observable<any> {
    return this.http.post(this.registerUrl, user);;
  }
  
  loginUser(user:User):Observable<any> {
    return this.http.post(this.loginUrl, user);
  }


  logoutUser():void {
    localStorage.clear();
  }

  loggedIn():boolean {
    return !!localStorage.getItem('user');
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return of({description: "Something bad happened; please try again later."});
  // };
}
