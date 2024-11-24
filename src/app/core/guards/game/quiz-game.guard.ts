import { CanActivateFn, Router } from '@angular/router';
import { GameDataParamsService } from '../../../game/params/game-data-params.service';
import { inject } from '@angular/core';

export const quizGameGuard: CanActivateFn = (route, state) => {
  const quizGame = inject(GameDataParamsService);
  const router = inject(Router);

  if (quizGame.getGameDataLocalStorage() == null) {
    return true;
  } else {
    router.navigate(['/quiz-game']);
    return false;
  }
};
