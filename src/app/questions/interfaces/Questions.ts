export interface Question {
    id: number;
    nfr: string;
  }

export interface QuestionTransformed {
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