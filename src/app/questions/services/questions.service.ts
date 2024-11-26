import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';
import { AuthService } from '../../auth/services/AuthService.service';
import { Question } from './practice-questions.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private apiUrl = 'http://localhost:8000/api/questions/questionsByCode';
  // private apiUrl = 'https://fuzzy-nfr-quest.up.railway.app/api/questions/questionsByCode';
  private againQuestionSource = new Subject<any>();
  private currentQuestionIndex = 0;
  private readonly timePerStep = 30; 
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

  getCurrentQuestion(questions: Question[]): Question | null {
    if (this.currentQuestionIndex < questions.length) {
      return questions[this.currentQuestionIndex];
    }
    return null;
  }

  nextQuestion(questions: Question[]) {
    this.currentQuestionIndex++;
    return this.getCurrentQuestion(questions);
  }

  resetGame() {
    this.currentQuestionIndex = 0;
  }

  calculateScore(timeRemaining: number): number {
    return Math.max(0, timeRemaining);
  }
  
}
