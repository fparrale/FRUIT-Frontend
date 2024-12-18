import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/services/AuthService.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-question',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home-question.component.html',
  styleUrl: './home-question.component.css'
})
export default class HomeQuestionComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}
  userRoleId: number = 0;

  ngOnInit(): void {
    const userData = this.authService.getUserData();
    this.userRoleId = userData?.user.role.id ?? 0;
  }

  importQuestions() {
    this.router.navigate(['/game-rooms']);
  }

  createGame() {
    this.router.navigate(['/create-game-room']);
  }

  findGame(option: string) {
    console.log('Find Game clicked');
    this.router.navigate(['/game']);
    localStorage.setItem('gameOption', option);
    this.router.navigate(['/game'], {
      queryParams: { mode: option }, 
    });
    console.log(option);
  }

  canShowItemTeacher(): boolean {
    return this.userRoleId === 1;
  }

  canShowItemStudent(): boolean {
    return this.userRoleId === 2;
  }

}
