import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';
import { AuthService } from '../../auth/services/AuthService.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  // private apiUrl = 'http://localhost:8000/api/questions/questionsByCode';
  private apiUrl = 'https://fuzzy-nfr-quest.up.railway.app/api/questions/questionsByCode';
  private againQuestionSource = new Subject<any>();
  againQuestion$ = this.againQuestionSource.asObservable();

  

  constructor(private http: HttpClient, private authService: AuthService) { }

  getQuestions(salaDeJuego: string): Observable<ApiResponse> {

    const userData = this.authService.getUserData();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userData?.access_token}`,
    });

    return this.http.post<ApiResponse>(this.apiUrl, { code: salaDeJuego }, { headers, withCredentials: true });
  }

  againQuestions(data: any) {
    console.log(this.againQuestionSource);
    if (data) {
      console.log(data);
      this.againQuestionSource.next(data);
    }
  }
  
}
