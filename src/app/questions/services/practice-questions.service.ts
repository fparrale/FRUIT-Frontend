import { Injectable } from "@angular/core";

export interface Question {
  requirement: string;
  variable: {
    options: string[];
    correct: string;
    feedback: string;
  };
  value: {
    options: string[];
    correct: string;
    feedback: string;
  };
  recommendation: {
    options: string[];
    correct: string;
    feedback: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PracticeQuestionService {

  private currentQuestionIndex = 0;
  private readonly timePerStep = 30; 


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