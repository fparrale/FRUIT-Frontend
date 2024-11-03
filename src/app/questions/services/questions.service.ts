import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  // private apiUrl = 'http://localhost:8000/api/questions/questionsByCode';
  private apiUrl = 'https://fuzzy-nfr-quest.up.railway.app';
  private againQuestionSource = new Subject<any>();
  againQuestion$ = this.againQuestionSource.asObservable();

  

  constructor(private http: HttpClient) { }

  getQuestions(salaDeJuego: string): Observable<ApiResponse> {
    // const token = localStorage.getItem('token'); 

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZnV6enktbmZyLXF1ZXN0LnVwLnJhaWx3YXkuYXBwL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNzMwNjA3MTgwLCJleHAiOjE3MzA2OTM1ODAsIm5iZiI6MTczMDYwNzE4MCwianRpIjoiWVpSbmRkanVjU2wzVjRZaCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.1hrPb0x_Hj1spvRn8ruFsEF9O28WaqSLUhSYHex2r2k";

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<ApiResponse>(this.apiUrl, { code: salaDeJuego }, { headers });
  }

  againQuestions(data: any) {
    console.log(this.againQuestionSource);
    if (data) {
      console.log(data);
      this.againQuestionSource.next(data);
    }
  }
  
}
