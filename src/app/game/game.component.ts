import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameDataParamsService } from './params/game-data-params.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export default class GameComponent {
  gameCode: string = '';
  errorMessage: string | null = null;
  showAlert: boolean = false;

  constructor(private gameService: GameService, private router: Router, private gameDataParamsService: GameDataParamsService) {}

  submitCode() {
    console.log('submitCode');
    if (this.gameCode.trim()) {
      this.gameService.submitGameCode(this.gameCode).subscribe({
        next: (response) => {
          const gameData = response.questions;
          this.gameDataParamsService.setGameDataLocalStorage(gameData);
          this.gameDataParamsService.setGameData(gameData);
          this.router.navigate(['/quiz-game']);
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.showAlert = true;
          setTimeout(() => {
            this.closeAlert();
          }, 3000);
        },
      });
    } else {
      this.errorMessage = 'Por favor, ingresa un código válido';
      this.showAlert = true;
      setTimeout(() => {
        this.closeAlert();
      }, 3000);
    }
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
