import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  // private apiUrl = 'http://localhost:8000/api/questions/questionsByCode';
  private apiUrl = 'https://fuzzy-nfr-quest.up.railway.app/api/questions/questionsByCode';
  private againQuestionSource = new Subject<any>();
  againQuestion$ = this.againQuestionSource.asObservable();

  

  constructor(private http: HttpClient) { }

  getQuestions(salaDeJuego: string): Observable<ApiResponse> {
    // const token = localStorage.getItem('token'); 

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZnV6enktbmZyLXF1ZXN0LnVwLnJhaWx3YXkuYXBwL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNzMxMDk3NzI3LCJleHAiOjE3MzExODQxMjcsIm5iZiI6MTczMTA5NzcyNywianRpIjoiYmRpUzBYcVV1dXRtaUM2NiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.a7ukSTUM-Jr0zQe8MSNIz9qdtvKdxJvBeGff8KKVOiA";

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
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
