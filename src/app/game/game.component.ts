import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameDataParamsService } from './params/game-data-params.service';
import { LoadingService } from '../shared/loading.service';
import { AlertService } from '../shared/alert.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export default class GameComponent {
  gameCode: string = '';

  constructor(private alertService: AlertService, private loadingService: LoadingService, private gameService: GameService, private router: Router, private gameDataParamsService: GameDataParamsService) {}

  submitCode() {
    if (this.gameCode.trim()) {
      this.loadingService.showLoading();
      this.gameService.submitGameCode(this.gameCode).subscribe({
        next: (response) => {
          this.loadingService.hideLoading();
          const gameData = response.questions;
          if (!gameData || gameData.length === 0) {
            this.alertService.showAlert('No se encontraron preguntas para el juego, por favor comunicate con tu docente.');
            return;
          }else{
            this.gameDataParamsService.setGameDataLocalStorage(gameData);
            this.gameDataParamsService.setGameRoomIdLocalStorage(response.game_room_id);
            this.gameDataParamsService.setGameData(gameData);
            this.router.navigate(['/quiz-game']);
          }
        },
        error: (error) => {
          this.loadingService.hideLoading();
          this.alertService.showAlert(error.message, true);
        },
      });
    } else {
      this.alertService.showAlert('El código del juego no puede estar vacío.', true);
    }
  }
}
