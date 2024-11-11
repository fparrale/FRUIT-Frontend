import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Credentials, User, UserData } from '../interfaces/Credentials';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 private apiUrl = 'https://fuzzy-nfr-quest.up.railway.app/api/auth/login';
 //private apiUrl = 'http://localhost:8000/api/auth/login';


  //private currentUser: UserData | null = null;
  private userDataKey = 'userData';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: Credentials): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap((response) => {
        this.setUserData(response.data);
      }),
      catchError((error) => {
        return throwError(
          () => new Error(error.error.message || 'Ocurrio un error intentalo mas tarde')
        );
      })
    );
  }

  private setUserData(userData: UserData): void {
    localStorage.setItem(this.userDataKey, JSON.stringify(userData));
  }

   getUserData(): UserData | null {
    if(typeof window !== 'undefined'){
    const userDataString = localStorage.getItem(this.userDataKey);
    return userDataString ? (JSON.parse(userDataString) as UserData) : null
    }else{
      return null;
    }
  }

  isAuthenticated(): boolean {
    const userData = this.getUserData();
    if(!userData){
      return false;
    }else{
      return this.isValidToken(userData);
    }
  }

  isValidToken(userData: UserData): boolean {
    try {
      const decodedToken: any = jwtDecode(userData.access_token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp > currentTime;
    } catch (error) {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.userDataKey);
    this.router.navigate(['/login']);
   
  }
}
