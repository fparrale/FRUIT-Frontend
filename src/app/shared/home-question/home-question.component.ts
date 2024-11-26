import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-question',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-question.component.html',
  styleUrl: './home-question.component.css'
})
export default class HomeQuestionComponent {

  constructor(private router: 
    Router) {}

  importQuestions() {
    console.log('Import Questions clicked');
    // Implement import questions functionality
  }

  createGame() {
    console.log('Create Game clicked');
    // Implement create game functionality
  }

  findGame(option: string) {
    console.log('Find Game clicked');
    localStorage.setItem('gameOption', option);
    this.router.navigate(['/game'], {
      queryParams: { mode: option }, 
    });
    console.log(option);
  }

}
