import { Question } from "./Questions";

export interface ApiResponse {
    data: Question[];
    message: string;
  }