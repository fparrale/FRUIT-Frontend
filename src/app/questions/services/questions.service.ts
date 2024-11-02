import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private apiUrl = 'http://localhost:8000/api/questions/questionsByCode';
  private againQuestionSource = new Subject<any>();
  againQuestion$ = this.againQuestionSource.asObservable();

  

  constructor(private http: HttpClient) { }

  getQuestions(salaDeJuego: string): Observable<ApiResponse> {
    // const token = localStorage.getItem('token'); 

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MzAwNjY2OTIsImV4cCI6MTczMDE1MzA5MiwibmJmIjoxNzMwMDY2NjkyLCJqdGkiOiJvUG9pNzBmQUtvZ0V4bDIzIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hPKG10DG680XXhdnjk5eS0WtzQ1yTUytkMUJs3j2bH8";

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
