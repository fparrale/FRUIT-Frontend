import { CanActivateFn, Router } from '@angular/router';
import { GameDataParamsService } from '../../../game/params/game-data-params.service';
import { inject } from '@angular/core';

export const quizGameGuard: CanActivateFn = (route, state) => {
  const quizGame = inject(GameDataParamsService);
  const router = inject(Router);

  const gameOption = localStorage.getItem('gameOption');

  if (quizGame.getGameDataLocalStorage() == null) {
    console.log('1');
    return true;
  } else {
    if (gameOption === 'practice') {
      console.log('2');
      router.navigate(['/practice-game']);
      return false;
    }

    console.log('2');
    router.navigate(['/quiz-game']);
    return false;
  }
};
