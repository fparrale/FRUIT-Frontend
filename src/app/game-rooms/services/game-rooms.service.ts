import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/services/AuthService.service';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameRoomsService {
  private apiUrlGameRooms = environment.apiUrl + 'game-rooms';
  private apiurlDeleteGameRoom = environment.apiUrl + 'delete-game-room';
  private apiurlUploadExcel = environment.apiUrl + 'questions/import';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getGameRooms(): Observable<any> {
    const userData = this.authService.getUserData();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userData?.access_token}`,
    });

    return this.http
      .get<any>(this.apiUrlGameRooms, { headers })
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

  deleteGameRoom(game_room_id:number,status:boolean): Observable<any> {
    const userData = this.authService.getUserData();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userData?.access_token}`,
    });

    return this.http
      .post<any>(this.apiurlDeleteGameRoom,{game_room_id, status},{ headers })
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

  uploadExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('archivo', file);

    const userData = this.authService.getUserData();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userData?.access_token}`,
    });

    return this.http
      .post<any>(this.apiurlUploadExcel, formData ,{ headers })
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
