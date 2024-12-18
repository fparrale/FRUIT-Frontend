import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthService } from '../../auth/services/AuthService.service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { createRnfGameRoomService, GameRoomRnf } from '../interfaces/game-rooms';

@Injectable({
  providedIn: 'root'
})
export class GameRoomsService {
  private apiUrlGameRooms = environment.apiUrl + 'game-rooms';
  private apiurlDeleteGameRoom = environment.apiUrl + 'delete-game-room';
  private apiurlUploadExcel = environment.apiUrl + 'questions/import';
  private apiUrlGenerateReportGameRoom = environment.apiUrl + 'generate-report-teacher-game-room';
  private apiUrlCreateGameRoom = environment.apiUrl + 'create-room-game-questions';

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
      .post<any>(this.apiurlDeleteGameRoom, {game_room_id, status},{ headers })
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

  generateReportGameRoom(game_room_id:number): Observable<any> {
    const userData = this.authService.getUserData();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userData?.access_token}`,
    });

    return this.http
    .post(
      this.apiUrlGenerateReportGameRoom,
      { game_room_id },
      { headers, responseType: 'blob', observe: 'response' }
    )
    .pipe(
      tap((response) => {
        return response;
      }),
      catchError((error) => {
        let errorMessage = 'Ocurrió un error, inténtalo más tarde';

        if (error.error instanceof Blob) {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              try {
                const errorData = JSON.parse(reader.result as string);
                errorMessage = errorData?.message || errorMessage;
                reject(new Error(errorMessage));
              } catch (e) {
                reject(new Error(errorMessage));
              }
            };
            reader.onerror = () => {
              reject(new Error(errorMessage));
            };
            reader.readAsText(error.error);
          });
        } else {
          errorMessage = error?.error?.message || errorMessage;
          return throwError(() => new Error(errorMessage));
        }
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

  createGameRoom(body: GameRoomRnf): Observable<any> {
    const userData = this.authService.getUserData();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userData?.access_token}`,
    });

    return this.http
      .post<any>(this.apiUrlCreateGameRoom, body,{ headers })
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
