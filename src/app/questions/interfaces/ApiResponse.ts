import { Question } from "./Questions";

export interface ApiResponse {
    questions: Question[];
    message: string;
  }