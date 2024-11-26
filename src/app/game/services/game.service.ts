import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from '../../auth/services/AuthService.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService { 
  private apiUrl = environment.apiUrl + 'questions/questionsByCode';
  constructor(private http: HttpClient, private authService: AuthService) {}


  submitGameCode(gameCode: string): Observable<any> {
    const userData = this.authService.getUserData();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userData?.access_token}`,
    });

    return this.http
      .post<any>(this.apiUrl, { code: gameCode }, { headers })
      .pipe(
        tap((response) => {
          return response;
        }),
        catchError((error) => {
          return throwError(
            () =>
              new Error(
                error.error.message || 'Ocurrio un error intentalo mas tarde'
              )
          );
        })
      );
  }
}
