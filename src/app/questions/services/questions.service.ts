import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private apiUrl = 'http://localhost:8000/api/questions/questionsBySala';

  constructor(private http: HttpClient) { }

  getQuestions(salaDeJuego: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, { sala_de_juego: salaDeJuego });
  }
}
